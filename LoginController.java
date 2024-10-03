@RestController
@RequestMapping("/api")
public class LoginController {
  @Autowired
  private UserService userService;

  @PostMapping("/login")
  public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
    Optional<User> user = userService.findByUsername(loginRequest.getUsername());
    if (user.isPresent()) {
      // Authenticate user
      return ResponseEntity.ok("Login successful");
    } else {
      return ResponseEntity.badRequest().body("Invalid username or password");
    }
  }
}
