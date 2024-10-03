@Service
public class UserService {
  @Autowired
  private UserRepository userRepository;

  public Optional<User> findByUsername(String username) {
    return userRepository.findByUsername(username);
  }
}
