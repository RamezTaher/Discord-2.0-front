import React from "react"
import { Link } from "react-router-dom"
import { HeroShowcaseBody, HeroShowcaseContainer, ShowCaseButton } from "."
import styles from "./index.module.scss"

const HeroContainer = () => {
  return (
    <>
      <HeroShowcaseContainer>
        <HeroShowcaseBody>
          <div className={styles.HeroShowcaseText}>
            <h1 className={styles.HeroShowcaseTitle}>Imagine a place...</h1>
            <p className={styles.HeroShowcaseParagraph}>
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </p>
          </div>

          <div className={styles.HeroShowcaseCta}>
            <div className={styles.ButtonContainer}>
              <ShowCaseButton>Download for Windows</ShowCaseButton>
            </div>
          </div>
        </HeroShowcaseBody>
      </HeroShowcaseContainer>
    </>
  )
}

export default HeroContainer
