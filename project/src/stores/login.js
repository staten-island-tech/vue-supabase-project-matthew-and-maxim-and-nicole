import { defineStore } from 'pinia';
import router from '@/router';
import { supabase } from '../supabaseClient.js';

export const useLoginStore = defineStore('login', {
  state: () => ({}),
  actions: {
    async signIn(email, password) {
      const { data: session, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.log(error);
        throw error;
      } else {
        router.push('/store/' + session.user.id);
        return session;
      }
    }
  }
});