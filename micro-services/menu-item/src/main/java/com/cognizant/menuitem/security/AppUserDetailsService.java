package com.cognizant.menuitem.security;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.cognizant.menuitem.model.User;
import com.cognizant.menuitem.repository.RoleRepository;
import com.cognizant.menuitem.repository.UserRepository;


@Service
public class AppUserDetailsService implements UserDetailsService {

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	AppUser appUser;
	User user;
	private static final Logger LOGGER = LoggerFactory.getLogger(AppUserDetailsService.class);

	public AppUserDetailsService() {
		super();
	}

	public AppUserDetailsService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	public AppUserDetailsService(UserRepository userRepository, RoleRepository roleRepository) {
		super();
		this.userRepository = userRepository;
		this.roleRepository = roleRepository;
	}

	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		LOGGER.info("loadUserByUsername START");
		user = userRepository.findByUsername(username);
		if (user == null)
			throw new UsernameNotFoundException("username not found");
		else
			appUser = new AppUser(user);
		LOGGER.info("loadUserByUsername END");
		return appUser;
	}


	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

}
