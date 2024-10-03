public interface GradeRepository extends JpaRepository<Grade, Long> {
  Optional<Grade> findByCourseAndStudent(Course course, Student student);
}
