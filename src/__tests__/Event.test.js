import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import Event from '../Event';

describe('<Event /> component', () => {

  let EventWrapper;

  const events =
  {
    created: 1563366230000,
    duration: 3600000,
    id: "263222596",
    name: "1 Million Cups Augusta at theClubhou.se",
    date_in_series_pattern: false,
    status: "upcoming",
    time: 1565179200000,
    local_date: "2019-08-07",
    local_time: "08:00",
    updated: 1563366230000,
    utc_offset: -14400000,
    waitlist_count: 0,
    yes_rsvp_count: 21,

    venue: {
      id: 25900005,
      name: "Georgia Cyber Center Hull Mcknight Building",
      lat: 33.459999084472656,
      lon: -81.97000122070312,
      repinned: false,
      address_1: "1 11th St",
      city: "Augusta",
      country: "us",
      localized_country_name: "USA",
      zip: "30901",
      state: "GA"
    },
  }

  beforeAll(() => {
    EventWrapper = shallow(<Event event={events} />);
  });

  test('test that componet is rendered', () => {
    expect(EventWrapper).toHaveLength(1);
  });

  test('test that event wrapping div is rendered', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('test that event wrapping div just shows event__Overview', () => {
    expect(EventWrapper.find('.event').children()).toHaveLength(1);
  });

  test('test that event__Overview is rendered', () => {
    expect(EventWrapper.find('.event__Overview')).toHaveLength(1);
  });

  test('test that event__Overview children are rendered', () => {
    expect(EventWrapper.find('.event__Overview').children()).toHaveLength(4);
  });

  test('test that event__Details children are rendered', () => {
    EventWrapper.setState({
      showDetails: true
    });
    expect(EventWrapper.find('.event__Details--description')).toHaveLength(1);
  });

  test('test that show/hide details button is rendered', () => {
    expect(EventWrapper.find('.event__Overview button')).toHaveLength(1);
  });

  test('click on button should show details', () => {
    EventWrapper.setState({
      showDetails: false
    });
    EventWrapper.find('.event__Overview button').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });

  test('set mock eventdata as state', () => {
    EventWrapper.setState({
      event: {
        created: 1563825339000,
        duration: 9000000,
        id: "263370107",
        name: "Microservices mit dem MicroProfile 3.x",
        rsvp_limit: 80,
        date_in_series_pattern: false,
        status: "upcoming",
        time: 1566925200000,
        local_date: "2019-08-27",
        local_time: "19:00",
        updated: 1563825339000,
        utc_offset: 7200000,
        waitlist_count: 79,
        yes_rsvp_count: 80,
        venue: {
          id: 26266792,
          name: "adesso AG",
          lat: 53.54524230957031,
          lon: 9.950983047485352,
          repinned: false,
          address_1: "Große Elbstraße 36",
          city: "Hamburg",
          country: "de",
          localized_country_name: "Deutschland"
        },
        group: {
          created: 1387402147000,
          name: "Java User Group Hamburg",
          id: 11500362,
          join_mode: "open",
          lat: 53.54999923706055,
          lon: 10,
          urlname: "jug-hamburg",
          who: "Mitglieder",
          localized_location: "Hamburg, Deutschland",
          state: "",
          country: "de",
          region: "de_DE",
          timezone: "Europe/Berlin"
        },
        link: "https://www.meetup.com/de-DE/jug-hamburg/events/263370107/",
        description: "<p>Wer Microservices in Java entwickeln möchte, muss nicht zwangsläufig zu Spring Boot greifen. Es lohnt ein Blick auf alternative Frameworks, die in zunehmender Anzahl verfügbar sind und bezüglich ihrer Funktionalität stark aufholen. So schreitet auch die Entwicklung des MicroProfiles weiter voran. In beeindruckender Geschwindigkeit wurden zahlreiche APIs entwickelt, die (nicht nur) für die Entwicklung von Microservices sehr hilfreich sind.<br/>Hierzu zählen die Unterstützung von Metriken, Health Checks, Fault Tolerance und JSON Web Tokens. Für den Einsatz im Projekt kann aus unterschiedlichen Implementierungen wie TomEE, Thorntail oder OpenLiberty gewählt werden. In dieser Live-Coding-Session wird der praktische Einsatz von MicroProfile anhand eines Praxisbeispiels demonstriert.<br/> <br/> <br/>Referent:<br/>Thilo Frotscher arbeitet als freiberuflicher Softwarearchitekt und Trainer. Als Experte für Enterprise Java und Systemintegration unterstützt er seine Kunden überwiegend durch Entwicklung, Reviews oder die Durchführung von Schulungen. Thilo ist (Co-)Autor mehrerer Bücher in den Bereichen Java EE, (Web) Services und Systemintegration, hat zahlreiche Fachartikel verfasst und spricht regelmäßig auf Fachkonferenzen und Schulungsveranstaltungen oder bei Java User Groups.</p> ",
        visibility: "public",
        member_pay_fee: false
      }
    });
    expect(EventWrapper.state('event').name).toBe('Microservices mit dem MicroProfile 3.x');
  });
});