@Service
public class CourseService {
  @Autowired
  private CourseRepository courseRepository;

  public Optional<Course> findByName(String name) {
    return courseRepository.findByName(name);
  }
}
