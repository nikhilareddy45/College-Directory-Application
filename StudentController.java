@RestController
@RequestMapping("/api")
public class StudentController {
  @Autowired
  private StudentService studentService;

  @GetMapping("/students")
  public ResponseEntity<List<Student>> getStudents() {
    List<Student> students = studentService.findAll();
    return ResponseEntity.ok(students);
  }

  @GetMapping("/students/{id}")
  public
