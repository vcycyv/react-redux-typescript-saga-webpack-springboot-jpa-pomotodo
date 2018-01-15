package net.chuyang.pomotodo.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.PrePersist;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import net.chuyang.pomotodo.Constants.TaskStatus;

@Entity
public class Task extends StringIdNamedEntity {
	private TaskStatus status = TaskStatus.STOPPED;
	private Date startTime;
	private Date finishTime;
	private int cost;
	private Date creationTimeStamp;
	
	@PrePersist
	public void onPrePersist(){
		setCreationTimeStamp(new Date());
	}

	@Temporal(TemporalType.TIMESTAMP)
	public Date getCreationTimeStamp() {
		return creationTimeStamp;
	}

	public void setCreationTimeStamp(Date creationTimeStamp) {
		this.creationTimeStamp = creationTimeStamp;
	}
	
	@Enumerated(EnumType.STRING) 
	public TaskStatus getStatus() {
		return status;
	}

	public void setStatus(TaskStatus status) {
		this.status = status;
	}
	
	public Date getStartTime() {
		return startTime;
	}

	public void setStartTime(Date pomoStartTime) {
		this.startTime = pomoStartTime;
	}
	
	public Date getFinishTime() {
		return finishTime;
	}

	public void setFinishTime(Date finishTime) {
		this.finishTime = finishTime;
	}

	public int getCost() {
		return cost;
	}

	public void setCost(int cost) {
		this.cost = cost;
	}
}
