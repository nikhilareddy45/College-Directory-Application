@Service
public class StudentService {
  @Autowired
  private StudentRepository studentRepository;

  public Optional<Student> findByEmail(String email) {
    return studentRepository.findByEmail(email);
  }
}
