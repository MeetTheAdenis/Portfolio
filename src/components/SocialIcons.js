const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/MeetTheAdenis" target="blank">
        <i className="fa-brands fa-github" aria-hidden="true" title="Adenis Shala' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/adenis-shala-b36631200?trk=public_profile_browsemap_profile-result-card_result-card_full-click" target="blank">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Adenis Shala' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/adenis_shala/" target="blank">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Adenis Shala' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/adenis_shala/" target="blank">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Adenis Shala' Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
