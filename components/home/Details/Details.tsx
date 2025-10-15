import cl from './Details.module.scss';
import Collapsible from "@/components/Collapsible/Collapsible";

export default function Details() {

    return (
        <>
        <h2>Purpose of this Site</h2>
        <section className={cl.introBlock}>
        <p className='neonWhite text0'>
            My main goal is to keep this site as an example of my skills, to show off my future works (with respecting the contract rules) and also to house some personal projects on it.
        </p>
        </section>

        <h2>Technical Details</h2>
        <section className={cl.introBlock}>
        <div className='neonWhite text0 center w100'>IDE: Visual Studio Code</div>
        <div className='neonWhite text0 center w100'>Version Control: GIT</div>
        <div className='neonWhite text0 center w100'>Framework: NextJS (full stack) + Typescript</div>
        <div className='neonWhite text0 center w100'>Authentication: NextAuth</div>
        <div className='neonWhite text0 center w100'>Database: MongoDB with Mongoose</div>
        <div className='neonWhite text0 center w100'>Theme: self made Neon Lights /scss</div>
        </section>

        <h2>Future Plans</h2>
        <section className={cl.introBlock}>
        <div className='neonWhite text0 w100'>
            Theme selector for the Site (night, light)
        </div>
        <div className='neonWhite text0 w100'>
            User selectable theme colors
        </div>
        <div className='neonWhite text0 w100'>
            Snake Game with javascript for the projects
        </div>
        <div className='neonWhite text0 w100'>
            Character creator and sheet for homebrew Shadowrun
        </div>
        </section>

        <h2>Color Test</h2>
        <Collapsible selectId={'colorTest'} summary={'Színteszt'} summaryClass={'neonOrange text2 w100 margBott1'}>
        <section className='flexRow margBott1'>
            <div className='text1 w100 center neonBlue hover'>kék</div>
            <div className='text1 w100 center reverseBlue'>kék</div>
            <div className='text1 w100 center neonBrown hover'>barna</div>
            <div className='text1 w100 center reverseBrown'>barna</div>
            <div className='text1 w100 center neonGreen hover'>zöld</div>
            <div className='text1 w100 center reverseGreen'>zöld</div>
            <div className='text1 w100 center neonOrange hover'>narancs</div>
            <div className='text1 w100 center reverseOrange'>narancs</div>
            <div className='text1 w100 center neonPurple hover'>lila</div>
            <div className='text1 w100 center reversePurple'>lila</div>
            <div className='text1 w100 center neonRed hover'>piros</div>
            <div className='text1 w100 center reverseRed'>piros</div>
            <div className='text1 w100 center neonTeal hover'>cián</div>
            <div className='text1 w100 center reverseTeal'>cián</div>
            <div className='text1 w100 center neonWhite hover'>fehér</div>
            <div className='text1 w100 center reverseWhite'>fehér</div>
            <div className='text1 w100 center neonYellow hover'>sárga</div>
            <div className='text1 w100 center reverseYellow'>sárga</div>
            <div className='text1 w100 center neonGrey hover'>szürke</div>
        </section>
        </Collapsible>
        </>
    );
}