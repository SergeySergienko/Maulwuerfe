import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import TeamMemberCard from './TeamMemberCard';

const Team = ({ teamMembers, showAllTeam = false }) => {
  const sliderSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className='external-container py-10 sm:py-16 lg:py-20'>
      {!showAllTeam && (
        <h2 className='mb-4 text-center font-accent tracking-widest font-bold'>
          <p className='text-lg text-red-600'>TEAM</p>
          <p className='text-4xl'>FREIBERGER MAULWÜRFE</p>
        </h2>
      )}
      <p className='mb-4'>
        Unser Team besteht aus einer dynamischen Gruppe von Spielern, Trainern
        und Betreuern, die eine Leidenschaft für Volleyball teilen. Ob
        Schmetterball, Blocken oder Strategieentwicklung, jedes Mitglied bringt
        seine einzigartigen Fähigkeiten und Energie auf das Spielfeld. Lernen
        Sie unser großartiges Team und die Menschen kennen, die jedes Spiel zu
        einem spannenden Erlebnis machen. Bleiben Sie dran für Updates zu
        unseren kommenden Spielen und Events!
      </p>
      {!showAllTeam ? (
        <Slider {...sliderSettings} className='mb-10'>
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} teamMember={member} />
          ))}
        </Slider>
      ) : (
        <div className='flex flex-wrap gap-8'>
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} teamMember={member} />
          ))}
        </div>
      )}
      {!showAllTeam && (
        <Link to='/team'>
          <button className='block btn-primary-2 mx-auto'>
            Das ganze Team anzeigen
          </button>
        </Link>
      )}
    </section>
  );
};

Team.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      position: PropTypes.string,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
  showAllTeam: PropTypes.bool,
};

export default Team;
