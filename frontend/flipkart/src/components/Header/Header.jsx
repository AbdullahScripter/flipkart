import React from 'react'
import styles from './Header.module.css'
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../../assets/Header/headerimg.svg"

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>

       
        <div className={styles.searchGroup}>
          <input
            type="text"
            placeholder="Search products..."
            className={styles.searchInput}
          />

          <button className={styles.searchBtn}>
            <SearchIcon />
          </button>
        </div>

        
        <div className={styles.actions}>
       
          <div className={styles.cart}>
            <ShoppingCartOutlinedIcon />

            <span className={styles.badge}>0</span>
          </div>

          
          <div className={styles.profile}>
            <PersonOutlineOutlinedIcon />

            <span>Profile</span>

            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header