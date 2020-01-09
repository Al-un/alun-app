<script>
import UserCredentials from "@/components/core/user-credentials.vue";
import { mapState } from "vuex";
import { CORE_HOME } from "@/router";

export default {
  /**
   * abstract-redirect-after defines shared elements for login and registration pages
   */
  name: "abstract-redirect-after",
  components: {
    // Both login and registration require this component
    UserCredentials
  },
  computed: mapState({
    token: state => state.token
  }),
  /**
   * If user is already logged, reject login tentative to prevent orphans tokens
   * and stuff
   */
  created: function() {
    console.log("Created: ", this.to);
    if (this.token) {
      this.redirect();
    }
  },
  methods: {
    /**
     * Redirect the user, for example upon successful login. Default to
     * home page if no query parameter is provided
     */
    redirect: function() {
      const nextFromQuery = this.$route.query
        ? this.$route.query["next"]
        : undefined;
      const redirectionTarget = nextFromQuery
        ? { path: nextFromQuery }
        : { name: CORE_HOME };

      this.$router.push(redirectionTarget);
    }
  }
};
</script>
