@Service
public class AdminService {
  @Autowired
  private AdminRepository adminRepository;

  public Optional<Admin> findByEmail(String email) {
    return adminRepository.findByEmail(email);
  }
}
