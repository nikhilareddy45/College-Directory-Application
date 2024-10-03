@Entity
public class Grade {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String grade;
  @ManyToOne
  @JoinColumn(name = "course_id")
  private Course course;
  @ManyToOne
  @JoinColumn(name = "student_id")
  private Student student;

  // Getters and setters
}
