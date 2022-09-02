import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Timekeeping</span> Application
      </h1>
      <p className={headerStyles.description}>
        Keep all timekeeping records
      </p>
    </div>
  )
}

export default Header