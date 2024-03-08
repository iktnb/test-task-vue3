<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="headline">Login</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                required
                :error-messages="emailErrors"
              ></v-text-field>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                type="password"
                required
                :error-messages="passwordErrors"
              ></v-text-field>
              <v-btn color="primary" type="submit">Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, computed } from "vue";
import { required, email, minLength } from "vuelidate/lib/validators";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const emailRules = computed(() => {
      return [
        !email.value ? "Email is required" : "",
        !email.value || !email.value.match(/^.+@.+\..+$/)
          ? "Email must be valid"
          : "",
      ];
    });

    const emailErrors = computed(() => {
      return emailRules.value.filter((rule) => rule !== "");
    });

    const passwordRules = computed(() => {
      return [
        !password.value ? "Password is required" : "",
        password.value && password.value.length < 6
          ? "Password must be at least 6 characters"
          : "",
      ];
    });

    const passwordErrors = computed(() => {
      return passwordRules.value.filter((rule) => rule !== "");
    });

    const login = () => {
      if (emailErrors.value.length === 0 && passwordErrors.value.length === 0) {
        router.push("/game");
      }
    };

    return {
      email,
      password,
      emailRules,
      emailErrors,
      passwordRules,
      passwordErrors,
      login,
    };
  },
};
</script>
