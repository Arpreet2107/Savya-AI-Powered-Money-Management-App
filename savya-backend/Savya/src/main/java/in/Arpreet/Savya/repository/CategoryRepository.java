package in.Arpreet.Savya.repository;

import in.Arpreet.Savya.entity.CategoryEntity;
import in.Arpreet.Savya.entity.ProfileEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface CategoryRepository extends JpaRepository<CategoryEntity, Long> {

    //select * from tbl_categories where profile_id =?1
    List<CategoryEntity> findByProfileId(Long profileId);

    //select * from tbl_categories where id =?1 and profile_id=?2
    Optional<CategoryEntity> findByIdAndProfileId(Long id, Long profileId);

    List<CategoryEntity> findByTypeAndProfile(String type, ProfileEntity profile);

    //select * from tbl_categories where name = ?1 and profile_id =?2
    Boolean existsByNameAndProfileId(String name, Long profileId);
}
