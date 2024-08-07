import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import TeamPage from './pages/TeamPage';
import ContactsPage from './pages/ContactsPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  const data = {
    upcomingEvents: [
      {
        title:
          'Sächsische Hochschulmeisterschaften im Beachvolleyball Männer und Frauen',
        date: '09.07.2024',
        time: '09:00',
        place: 'Dresden, Sportanlage des Dresdner SSV',
      },
      {
        title: 'Sächsische Hochschulmeisterschaften im Beachvolleyball mixed',
        date: '10.07.2024',
        time: '09:00',
        place: 'Dresden, Sportanlage des Dresdner SSV',
      },
      {
        title:
          'Sächsische Hochschulmeisterschaften im Beachvolleyball Männer und Frauen',
        date: '13.06.2024',
        time: '09:00',
        place: 'Dresden, Sportanlage des Dresdner SSV',
      },
    ],
    teamMembers: [
      {
        name: 'Hans Müller',
        position: 'Coach',
        img: '/team_members/hans_muller.jpeg',
      },
      {
        name: 'Friedrich Becker',
        position: 'Captain',
        img: '/team_members/friedrich_becker.jpeg',
      },
      {
        name: 'Klaus Wagner',
        position: 'Setter',
        img: '/team_members/klaus_wagner.jpeg',
      },
      {
        name: 'Jürgen Schmidt',
        position: 'Libero',
        img: '/team_members/jurgen_schmidt.jpeg',
      },
      {
        name: 'Ursula Fischer',
        position: 'Outside Hitter',
        img: '/team_members/ursula_fischer.jpeg',
      },
      {
        name: 'Monika Weber',
        position: 'Opposite Hitter',
        img: '/team_members/monika_weber.webp',
      },
      {
        name: 'Helga Hoffmann',
        position: 'Middle Blocker',
        img: '/team_members/helga_hoffmann.jpeg',
      },
      {
        name: 'Heinz Schäfer',
        position: 'Team Mascot',
        img: '/team_members/heinz_schafer.jpeg',
      },
      {
        name: 'Brigitte Wolf',
        position: 'Statistician',
        img: '/team_members/brigitte_wolf.jpeg',
      },
      {
        name: 'Günther Meyer',
        position: 'Assistant Coach',
        img: '/team_members/gunther_meyer.jpeg',
      },
      {
        name: 'Erika Bauer',
        position: 'Water Boy/Girl',
        img: '/team_members/erika_bauer.jpeg',
      },
      {
        name: 'Gertrud Keller',
        position: 'Cheerleader',
        img: '/team_members/gertrud_keller.jpeg',
      },
      {
        name: 'Rainer Koch',
        position: 'Bench Warmer',
        img: '/team_members/rainer_koch.webp',
      },
      {
        name: 'Dieter Richter',
        position: 'Ace Server',
        img: '/team_members/dieter_richter.jpeg',
      },
      {
        name: 'Elfriede Klein',
        position: 'Fan Club President',
        img: '/team_members/elfriede_klein.webp',
      },
      {
        name: 'Gisela Frank',
        position: 'Court Jester',
        img: '/team_members/gisela_frank.webp',
      },
    ],
    eventsArchive: [
      {
        date: '01.02.2024',
        title: 'Volleyball-Winterspiele',
        description:
          'Die Volleyball-Winterspiele waren ein voller Erfolg und boten spannende Wettkämpfe und erstklassigen Volleyballsport. Die teilnehmenden Teams zeigten beeindruckende Leistungen, und die Zuschauer waren begeistert von den packenden Spielen. Trotz der winterlichen Kälte herrschte eine warme und festliche Atmosphäre, die das Event zu einem unvergesslichen Erlebnis machte. Am Ende konnten die besten Mannschaften ihre Trophäen mit Stolz entgegennehmen, und alle Teilnehmer gingen mit vielen schönen Erinnerungen nach Hause.',
        place: 'Dresden, Sportanlage des Dresdner SSV',
        placeInTheTournament: 3,
        amountOfPhotos: 12,
        coverPhoto: 1,
        photosFormat: 'jpeg',
      },
      {
        date: '05.03.2024',
        title: 'Maulwurf-Meisterliga',
        description:
          'Die Maulwurf-Meisterliga war ein herausragendes Turnier, das die besten Volleyballmannschaften der Region zusammenbrachte. Spannende Wettkämpfe und intensive Spiele prägten das Turnier, das sowohl Spieler als auch Zuschauer gleichermaßen faszinierte. Am Ende konnte sich eine Mannschaft als Meister der Liga feiern lassen und die Trophäe stolz entgegennehmen.',
        place: 'Chemnitz, Sportarena Chemnitz',
        placeInTheTournament: 2,
        amountOfPhotos: 9,
        coverPhoto: 1,
        photosFormat: 'jpeg',
      },
      {
        date: '24.03.2024',
        title: 'Volleyball-Meisterschaft der Regionen',
        description:
          'Die Volleyball-Meisterschaft der Regionen brachte Teams aus verschiedenen Teilen Deutschlands zusammen, um in einem hochkompetitiven Turnier ihr Können zu zeigen. Die Spiele waren geprägt von intensiven Duellen und taktischen Finessen auf dem Spielfeld. Das Publikum erlebte spannende Matches und unterstützte ihre Teams enthusiastisch bis zur letzten Minute. Am Ende konnte sich das erfolgreichste Team als Meister der Regionen feiern lassen und den verdienten Pokal in Empfang nehmen.',
        place: 'Leipzig, Sporthalle Leipzig-Süd',
        placeInTheTournament: 8,
        amountOfPhotos: 11,
        photosFormat: 'jpeg',
      },
      {
        date: '18.04.2024',
        title: 'Herbst Volleyball-Cup',
        description:
          'Der Herbst Volleyball-Cup lockte Teams aus ganz Deutschland an und bot spannende Wettkämpfe in einer herbstlich gestimmten Atmosphäre. Die Spieler zeigten großes Engagement, und die Zuschauer genossen das farbenfrohe Spektakel auf dem Spielfeld. Am Ende des Turniers konnte das siegreiche Team den Pokal in die Höhe halten und die verdiente Anerkennung für ihre Leistungen entgegennehmen.',
        place: 'Erfurt, Sporthalle Erfurt',
        placeInTheTournament: 9,
        amountOfPhotos: 20,
        coverPhoto: 9,
        photosFormat: 'jpeg',
      },
      {
        date: '02.05.2024',
        title: 'Sächsische Volleyball-Freundschaftspokal',
        description:
          'Der Volleyball-Freundschaftspokal war ein großartiges Event, das Teams aus verschiedenen Regionen zusammenbrachte, um in einer freundschaftlichen Atmosphäre gegeneinander anzutreten. Die Spiele waren spannend und zeigten das hohe Niveau und die Leidenschaft der Spieler. Zuschauer und Teilnehmer genossen die herzliche Gemeinschaft und die festliche Stimmung des Turniers. Der Pokal endete mit einer Siegerehrung, bei der alle Teams für ihren Einsatz und ihre sportliche Fairness gefeiert wurden.',
        place: 'Leipzig, Sportzentrum Leipzig',
        placeInTheTournament: 7,
        amountOfPhotos: 26,
        coverPhoto: 9,
        photosFormat: 'jpeg',
      },
      {
        date: '03.05.2024',
        title: 'Freiberger Volleyballturnier',
        description:
          'Das Freiberger Volleyballturnier bot spannende Spiele und zeigte beeindruckende sportliche Leistungen der teilnehmenden Teams. Die Zuschauer waren begeistert von der dynamischen Atmosphäre und der hervorragenden Organisation des Events. Am Ende des Tages konnten die besten Mannschaften ihre wohlverdienten Auszeichnungen entgegennehmen.',
        place: 'Freiberg, Sportkomplex Freiberg',
        placeInTheTournament: 5,
        amountOfPhotos: 21,
        coverPhoto: 8,
        photosFormat: 'jpeg',
      },
      {
        date: '19.05.2024',
        title: 'Meisterschaft der Maulwürfe',
        description:
          'Die Meisterschaft der Maulwürfe versammelte die talentiertesten Volleyballteams der Region zu einem hochkarätigen Wettkampf. Die Spiele waren geprägt von taktischen Raffinessen und kämpferischem Einsatz der Spieler. Das Turnier bot den Zuschauern packende Momente und wurde von einer euphorischen Atmosphäre begleitet. Am Ende konnte das beste Team seinen verdienten Platz als Meister der Maulwürfe einnehmen und stolz den Pokal entgegennehmen.',
        place: 'Dresden, Turnhalle Dresden-Mitte',
        placeInTheTournament: 4,
        amountOfPhotos: 8,
        coverPhoto: 6,
        photosFormat: 'jpeg',
      },
      {
        date: '08.06.2024',
        title: 'Brietzer Sportplatz Cup',
        description:
          'Das Volleyballturnier wurde vom SV Brietz 77 e.V. organisiert und fand unter freiem Himmel statt. Es bot spannende Spiele und zeigte beeindruckende sportliche Leistungen der teilnehmenden Teams. Die Zuschauer waren begeistert von der dynamischen Atmosphäre und der hervorragenden Organisation des Events. Am Ende des Tages konnten die besten Mannschaften ihre wohlverdienten Auszeichnungen entgegennehmen.',
        place: 'Brietz, Sportplatz',
        placeInTheTournament: 7,
        amountOfPhotos: 4,
        coverPhoto: 3,
        photosFormat: 'jpg',
      },
    ],
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path='/'
          element={<MainLayout upcomingEvents={data.upcomingEvents} />}
        >
          <Route index element={<HomePage data={data} />} />
          <Route
            path='/events'
            element={<EventsPage eventsArchive={data.eventsArchive} />}
          />
          <Route
            path='/team'
            element={<TeamPage teamMembers={data.teamMembers} />}
          />
          <Route path='/contacts' element={<ContactsPage />} />
        </Route>
        <Route path='/*' element={<NotFoundPage />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
