public interface CourseRepository extends JpaRepository<Course, Long> {
  Optional<Course> findByName(String name);
}
