public interface FacultyRepository extends JpaRepository<Faculty, Long> {
  Optional<Faculty> findByEmail(String email);
}
