@Service
public class FacultyService {
  @Autowired
  private FacultyRepository facultyRepository;

  public Optional<Faculty> findByEmail(String email) {
    return facultyRepository.findByEmail(email);
  }
}
