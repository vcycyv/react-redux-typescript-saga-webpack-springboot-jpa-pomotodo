package net.chuyang.pomotodo.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import net.chuyang.pomotodo.entity.Setting;
import net.chuyang.pomotodo.repository.SettingRepository;

@RestController
@RequestMapping("/setting")
public class SettingController {
	@Autowired
	SettingRepository repository;
	
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<Setting> getSetting(){
		return new ResponseEntity<>(repository.findAll().iterator().next(), HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value="/{id}")
	public ResponseEntity<Setting> save(@RequestBody Setting setting){
		return new ResponseEntity<>(repository.save(setting), HttpStatus.OK);
	}
}
