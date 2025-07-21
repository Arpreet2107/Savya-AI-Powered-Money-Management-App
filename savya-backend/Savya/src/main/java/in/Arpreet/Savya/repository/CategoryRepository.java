package in.Arpreet.Savya.repository;

import in.Arpreet.Savya.entity.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Locale;
import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Locale.Category, Long> {
    //select * from tbl_categories where profile_id =?1
    List<CategoryEntity> findByProfileId(Long profile_id);

    //select * from tbl_categories where id =?1 and profile_id=?2
    Optional<CategoryEntity> findIdAndProfileId(Long id, Long profileId);

    //select * from tbl_categories where type = ?1 and profile_id =?2
    List<CategoryEntity> findByTypeAndProfile(String type, Long profileId);

    //select * from tbl_categories where name = ?1 and profile_id =?2
    Boolean existsByNameAndProfileId(String name, Long profileId);

}
