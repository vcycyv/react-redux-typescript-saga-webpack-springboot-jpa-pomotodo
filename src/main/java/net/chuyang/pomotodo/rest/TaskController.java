package net.chuyang.pomotodo.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.collect.Lists;

import net.chuyang.pomotodo.entity.Task;
import net.chuyang.pomotodo.repository.TaskRepository;

@RestController
@RequestMapping("/tasks")
public class TaskController {
	@Autowired
	TaskRepository repository;
	
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Task>> getTasks(){
		return new ResponseEntity<>(Lists.newArrayList(repository.findAllByOrderByCreationTimeStampAsc()), HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Task> save(@RequestBody Task task){
		return new ResponseEntity<>(repository.save(task), HttpStatus.CREATED);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value="/{id}")
	public ResponseEntity<Task> update(@PathVariable String id,
			@RequestBody Task task){
		task.setId(id);
		if(repository.findOne(id) == null)
			throw new IllegalArgumentException("Id is not found.");
		return new ResponseEntity<>(repository.save(task), HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value="/{id}")
	public ResponseEntity<Void> delete(@PathVariable String id){
		repository.delete(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
}
