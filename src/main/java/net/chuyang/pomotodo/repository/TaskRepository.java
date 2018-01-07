package net.chuyang.pomotodo.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import net.chuyang.pomotodo.entity.Task;

@Repository
public interface TaskRepository extends PagingAndSortingRepository<Task, String> {

}
