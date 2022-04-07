package entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Comment {
	@Id
	private String commentId;
	private String comment;
	private User userId;
	public Comment()
	{
		
	}
	public Comment(String commentId, String comment, User userId) {
		super();
		this.commentId = commentId;
		this.comment = comment;
		this.userId = userId;
	}
	public String getCommentId() {
		return commentId;
	}
	public void setCommentId(String commentId) {
		this.commentId = commentId;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public User getUserId() {
		return userId;
	}
	public void setUserId(User userId) {
		this.userId = userId;
	}
	

}
