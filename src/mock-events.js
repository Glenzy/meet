const mockEvents = {
  events: {
    config: {
      url:
        "https://www.googleapis.com/calendar/v3/calendars/fullstackwebdev%40careerfoundry.com/events?timeMin=2020-06-21T19%3A38%3A22.152Z&maxResults=1&singleEvents=true&orderBy=startTime",
      method: "GET",
      headers: {
        "Accept-Encoding": "gzip",
        "User-Agent": "google-api-nodejs-client/0.7.2 (gzip)",
        Authorization:
          "Bearer ya29.a0AfH6SMDNjv5xjHzdUWOPAbwzyP65THJHoYUhECQ0B_uUTEUMUMXosMZq56XmO7wup2sggwMpSPF7vSFukeKF_v3QRbVmdPwRg0K0BPWK66zt-LSGN4vxqyzhtOI-sJxS4mUeYssZ3HGI8IuFkJAOUhjWBgTsy4is1_oxmQ",
        Accept: "application/json",
      },
      params: {
        timeMin: "2020-06-21T19:38:22.152Z",
        maxResults: 1,
        singleEvents: true,
        orderBy: "startTime",
      },
      responseType: "json",
    },
    data: {
      kind: "calendar#events",
      etag: '"p32g9nje8vv9ui0g"',
      summary: "fullstackwebdev@careerfoundry.com",
      updated: "2020-05-27T12:01:32.356Z",
      timeZone: "Europe/Berlin",
      accessRole: "reader",
      defaultReminders: [],
      nextPageToken:
        "EjYKKzNxdGQ2dXNjcTR0c2k2Z2M3bm1tdHBxbGN0XzIwMjAwNjIyVDEyMDAwMFoYgLDkxMqV6gIiBwgFEK6sjwc=",
      items: [
        {
          kind: "calendar#event",
          etag: '"3181159875584000"',
          id: "3qtd6uscq4tsi6gc7nmmtpqlct_20200622T120000Z",
          status: "confirmed",
          htmlLink:
            "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
          created: "2020-05-19T19:14:30.000Z",
          updated: "2020-05-27T11:45:37.792Z",
          summary: "React is Fun",
          description:
            "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
          location: "Berlin, Germany",
          creator: {
            email: "fullstackwebdev@careerfoundry.com",
            self: true,
          },
          organizer: {
            email: "fullstackwebdev@careerfoundry.com",
            self: true,
          },
          start: {
            dateTime: "2020-06-22T14:00:00+02:00",
            timeZone: "Europe/Berlin",
          },
          end: {
            dateTime: "2020-06-22T15:00:00+02:00",
            timeZone: "Europe/Berlin",
          },
          recurringEventId: "3qtd6uscq4tsi6gc7nmmtpqlct",
          originalStartTime: {
            dateTime: "2020-06-22T14:00:00+02:00",
            timeZone: "Europe/Berlin",
          },
          iCalUID: "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
          sequence: 0,
          reminders: {
            useDefault: true,
          },
        },
        {
          kind: "calendar#event",
          etag: '"3181161784712000"',
          id: "4eahs9ghkhrvkld72hogu9ph3e_20200623T140000Z",
          status: "confirmed",
          htmlLink:
            "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MjNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
          created: "2020-05-19T19:17:46.000Z",
          updated: "2020-05-27T12:01:32.356Z",
          summary: "Learn JavaScript",
          description:
            "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
          location: "London, UK",
          creator: {
            email: "fullstackwebdev@careerfoundry.com",
            self: true,
          },
          organizer: {
            email: "fullstackwebdev@careerfoundry.com",
            self: true,
          },
          start: {
            dateTime: "2020-06-23T16:00:00+02:00",
            timeZone: "Europe/Berlin",
          },
          end: {
            dateTime: "2020-06-23T17:00:00+02:00",
            timeZone: "Europe/Berlin",
          },
          recurringEventId: "4eahs9ghkhrvkld72hogu9ph3e",
          originalStartTime: {
            dateTime: "2020-06-23T16:00:00+02:00",
            timeZone: "Europe/Berlin",
          },
          iCalUID: "4eahs9ghkhrvkld72hogu9ph3e@google.com",
          sequence: 0,
          reminders: {
            useDefault: true,
          },
        },
      ],
    },
    headers: {
      "alt-svc":
        'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "cache-control": "private, max-age=0, must-revalidate, no-transform",
      connection: "close",
      "content-encoding": "gzip",
      "content-type": "application/json; charset=UTF-8",
      date: "Sun, 21 Jun 2020 19:38:22 GMT",
      expires: "Sun, 21 Jun 2020 19:38:22 GMT",
      server: "ESF",
      "transfer-encoding": "chunked",
      vary: "Origin, X-Origin, Referer",
      "x-content-type-options": "nosniff",
      "x-frame-options": "SAMEORIGIN",
      "x-xss-protection": "0",
    },
    status: 200,
    statusText: "OK",
  },
};
export { mockEvents };
