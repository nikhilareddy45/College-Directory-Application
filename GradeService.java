@Service
public class GradeService {
  @Autowired
  private GradeRepository gradeRepository;

  public Optional<Grade> findByCourseAndStudent(Course course, Student student) {
    return gradeRepository.findByCourseAndStudent(course, student);
  }
}
