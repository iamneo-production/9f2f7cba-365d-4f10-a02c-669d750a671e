package entities;

import java.sql.Blob;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Image {
	@Id
	private String imageId;
	private String imageName;
	private Blob image;
	private String imageTag;
	private Comment comment;
	public Image()
	{
		
	}
	
	public Image(String imageId, String imageName, Blob image, String imageTag, Comment comment) {
		super();
		this.imageId = imageId;
		this.imageName = imageName;
		this.image = image;
		this.imageTag = imageTag;
		this.comment = comment;
	}
	public String getImageId() {
		return imageId;
	}
	public void setImageId(String imageId) {
		this.imageId = imageId;
	}
	public String getImageName() {
		return imageName;
	}
	public void setImageName(String imageName) {
		this.imageName = imageName;
	}
	public Blob getImage() {
		return image;
	}
	public void setImage(Blob image) {
		this.image = image;
	}
	public String getImageTag() {
		return imageTag;
	}
	public void setImageTag(String imageTag) {
		this.imageTag = imageTag;
	}
	public Comment getComment() {
		return comment;
	}
	public void setComment(Comment comment) {
		this.comment = comment;
	}
	
	

}
