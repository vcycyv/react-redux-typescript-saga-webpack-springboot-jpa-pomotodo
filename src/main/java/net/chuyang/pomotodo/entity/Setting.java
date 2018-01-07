package net.chuyang.pomotodo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class Setting {
	private String id;
	private int pomoLength;
	
	@Id
	@GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid", strategy = "uuid")
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getPomoLength() {
		return pomoLength;
	}

	public void setPomoLength(int pomoLength) {
		this.pomoLength = pomoLength;
	}
}
