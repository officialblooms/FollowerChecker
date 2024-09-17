package project.follower;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

public class main {
    public static void main(String args[]) throws IOException {
        List<String> follow = new ArrayList<>();
        List<String> fans = new ArrayList<>();

        // IMPORTANT NOTE: remove the "relationships_following" line in following.json so this works properly

        extractNames("following.json", follow);
        extractNames("followers_1.json", fans);

        List<String> fakeFans = compare(follow, fans);
        List<String> opps = compare(fans, follow);
        System.out.println(
                "Not following me back (" + fakeFans.size() + ")\n" + toString(fakeFans));
        System.out.println(
                "I'm not following back (" + opps.size() + ")\n" + toString(opps));

    }

    // extract usernames from JSON file
    public static void extractNames(String filename, List<String> list) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        List<UserList> userList = mapper.readValue(new File(filename), new TypeReference<List<UserList>>() {});
        for (UserList user : userList) {
            for (UserList.User user_data : user.string_list_data) {
                list.add(user_data.value);
            }
        }
 
    }
    // prints out names not found in second list
    public static List<String> compare(List<String> l1, List<String> l2) {
        List<String> ret = new ArrayList<>();
        for (String word : l1) {
            if (!l2.contains(word)) {
                ret.add(word);
            }
        }
        return ret;
    }

    public static String toString(List<String> list) {
        String ret = "";
        for (String word : list) {
            ret += word + "\n";
        }
        return ret;
    }

}
