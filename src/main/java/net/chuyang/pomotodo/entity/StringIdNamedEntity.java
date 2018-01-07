package net.chuyang.pomotodo.entity;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import org.hibernate.annotations.GenericGenerator;

@MappedSuperclass
public class StringIdNamedEntity {
	protected String id;
	public String name;

	@Id
	@GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid", strategy = "uuid")
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public boolean equals(Object obj) {

		if (this == obj) {
			return true;
		}

		if (this.id == null || obj == null || !(this.getClass().equals(obj.getClass()))) {
			return false;
		}

		StringIdNamedEntity that = (StringIdNamedEntity) obj;

		return this.id.equals(that.getId());
	}

	@Override
	public int hashCode() {
		return id == null ? 0 : id.hashCode();
	}
}
