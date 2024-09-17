package project.follower;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
class UserList {
    public List<User> string_list_data;

    @JsonIgnoreProperties(ignoreUnknown = true)
    static class User {
        public String value;
    }
}