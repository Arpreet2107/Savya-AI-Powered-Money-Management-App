package in.Arpreet.Savya.repository;

import  in.Arpreet.Savya.entity.ProfileEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.OptionalInt;

public interface ProfileRepository  extends JpaRepository<ProfileEntity,Long> {
    //select * from tbl_profiles where email = ?
    Optional<ProfileEntity> findByEmail(String email);

    //behind the scenes this code will execute the following:
    //select * from tbl_profiles where activation_token=?
    Optional<ProfileEntity> findByActivationToken(String activationToken);
}