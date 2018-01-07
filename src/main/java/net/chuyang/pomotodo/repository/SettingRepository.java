package net.chuyang.pomotodo.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import net.chuyang.pomotodo.entity.Setting;

@Repository
public interface SettingRepository extends PagingAndSortingRepository<Setting, String>{

}
