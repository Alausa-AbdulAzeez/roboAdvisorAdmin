import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import GeneralTable from "../components/GeneralTable";

const Users = () => {
  // DUMMY DATA FOR TABLE HEADERS
  const tableHeaders = [
    "Username",
    "User ID",
    "Email Address",
    "Last Login",
    "Registration Date",
    "Status",
    "more",
  ];

  // TABLE TITLE
  const title = "User List";

  // Demo data
  // Example items, to simulate fetching from another resources.

  const items = [
    {
      email: "user1@example.com",
      firstname: "User1",
      preferredName: "User1",
      middleName: "Middle1",
      lastname: "Doe1",
      dateOfBirth: "6 July, 1973",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "inactive",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "448274",
        street: "Street1",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487181",
      currentStage: "preEmailVerification",
    },
    {
      email: "user2@example.com",
      firstname: "User2",
      preferredName: "User2",
      middleName: "Middle2",
      lastname: "Doe2",
      dateOfBirth: "26 February, 1978",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "720545",
        street: "Street2",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487182",
      currentStage: "preEmailVerification",
    },
    {
      email: "user3@example.com",
      firstname: "User3",
      preferredName: "User3",
      middleName: "Middle3",
      lastname: "Doe3",
      dateOfBirth: "12 March, 1962",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "inactive",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "130097",
        street: "Street3",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487183",
      currentStage: "preEmailVerification",
    },
    {
      email: "user4@example.com",
      firstname: "User4",
      preferredName: "User4",
      middleName: "Middle4",
      lastname: "Doe4",
      dateOfBirth: "10 December, 1977",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "272087",
        street: "Street4",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487184",
      currentStage: "preEmailVerification",
    },
    {
      email: "user5@example.com",
      firstname: "User5",
      preferredName: "User5",
      middleName: "Middle5",
      lastname: "Doe5",
      dateOfBirth: "2 June, 1963",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "inactive",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "477029",
        street: "Street5",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487185",
      currentStage: "preEmailVerification",
    },
    {
      email: "user6@example.com",
      firstname: "User6",
      preferredName: "User6",
      middleName: "Middle6",
      lastname: "Doe6",
      dateOfBirth: "14 May, 1984",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "581022",
        street: "Street6",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487186",
      currentStage: "preEmailVerification",
    },
    {
      email: "user7@example.com",
      firstname: "User7",
      preferredName: "User7",
      middleName: "Middle7",
      lastname: "Doe7",
      dateOfBirth: "8 August, 1989",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "361084",
        street: "Street7",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487187",
      currentStage: "preEmailVerification",
    },
    {
      email: "user8@example.com",
      firstname: "User8",
      preferredName: "User8",
      middleName: "Middle8",
      lastname: "Doe8",
      dateOfBirth: "25 April, 1982",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "inactive",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "788226",
        street: "Street8",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487188",
      currentStage: "preEmailVerification",
    },
    {
      email: "user9@example.com",
      firstname: "User9",
      preferredName: "User9",
      middleName: "Middle9",
      lastname: "Doe9",
      dateOfBirth: "16 September, 1976",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "134789",
        street: "Street9",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487189",
      currentStage: "preEmailVerification",
    },

    {
      email: "user1@example.com",
      firstname: "User1",
      preferredName: "User1",
      middleName: "Middle1",
      lastname: "Doe1",
      dateOfBirth: "6 July, 1973",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "448274",
        street: "Street1",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487181",
      currentStage: "preEmailVerification",
    },
    {
      email: "user2@example.com",
      firstname: "User2",
      preferredName: "User2",
      middleName: "Middle2",
      lastname: "Doe2",
      dateOfBirth: "26 February, 1978",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "720545",
        street: "Street2",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487182",
      currentStage: "preEmailVerification",
    },
    {
      email: "user3@example.com",
      firstname: "User3",
      preferredName: "User3",
      middleName: "Middle3",
      lastname: "Doe3",
      dateOfBirth: "12 March, 1962",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "130097",
        street: "Street3",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487183",
      currentStage: "preEmailVerification",
    },
    {
      email: "user4@example.com",
      firstname: "User4",
      preferredName: "User4",
      middleName: "Middle4",
      lastname: "Doe4",
      dateOfBirth: "10 December, 1977",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "272087",
        street: "Street4",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487184",
      currentStage: "preEmailVerification",
    },
    {
      email: "user5@example.com",
      firstname: "User5",
      preferredName: "User5",
      middleName: "Middle5",
      lastname: "Doe5",
      dateOfBirth: "2 June, 1963",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "inactive",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "477029",
        street: "Street5",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487185",
      currentStage: "preEmailVerification",
    },
    {
      email: "user10@example.com",
      firstname: "User10",
      preferredName: "User10",
      middleName: "Middle10",
      lastname: "Doe10",
      dateOfBirth: "30 November, 1981",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "502173",
        street: "Street10",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487190",
      currentStage: "preEmailVerification",
    },
    {
      email: "user11@example.com",
      firstname: "User11",
      preferredName: "User11",
      middleName: "Middle11",
      lastname: "Doe11",
      dateOfBirth: "3 October, 1985",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "689540",
        street: "Street11",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487191",
      currentStage: "preEmailVerification",
    },
    {
      email: "user12@example.com",
      firstname: "User12",
      preferredName: "User12",
      middleName: "Middle12",
      lastname: "Doe12",
      dateOfBirth: "17 December, 1987",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "965238",
        street: "Street12",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487192",
      currentStage: "preEmailVerification",
    },
    {
      email: "user13@example.com",
      firstname: "User13",
      preferredName: "User13",
      middleName: "Middle13",
      lastname: "Doe13",
      dateOfBirth: "22 January, 1983",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "570218",
        street: "Street13",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487193",
      currentStage: "preEmailVerification",
    },
    {
      email: "user14@example.com",
      firstname: "User14",
      preferredName: "User14",
      middleName: "Middle14",
      lastname: "Doe14",
      dateOfBirth: "9 February, 1975",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "105713",
        street: "Street14",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487194",
      currentStage: "preEmailVerification",
    },
    {
      email: "user15@example.com",
      firstname: "User15",
      preferredName: "User15",
      middleName: "Middle15",
      lastname: "Doe15",
      dateOfBirth: "19 March, 1980",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "621634",
        street: "Street15",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487195",
      currentStage: "preEmailVerification",
    },
    {
      email: "user16@example.com",
      firstname: "User16",
      preferredName: "User16",
      middleName: "Middle16",
      lastname: "Doe16",
      dateOfBirth: "5 July, 1986",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "825096",
        street: "Street16",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487196",
      currentStage: "preEmailVerification",
    },
    {
      email: "user17@example.com",
      firstname: "User17",
      preferredName: "User17",
      middleName: "Middle17",
      lastname: "Doe17",
      dateOfBirth: "11 August, 1971",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "448274",
        street: "Street17",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487197",
      currentStage: "preEmailVerification",
    },
    {
      email: "user18@example.com",
      firstname: "User18",
      preferredName: "User18",
      middleName: "Middle18",
      lastname: "Doe18",
      dateOfBirth: "28 September, 1978",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "720545",
        street: "Street18",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487198",
      currentStage: "preEmailVerification",
    },
    {
      email: "user19@example.com",
      firstname: "User19",
      preferredName: "User19",
      middleName: "Middle19",
      lastname: "Doe19",
      dateOfBirth: "12 June, 1984",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "699237",
        street: "Street19",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487199",
      currentStage: "preEmailVerification",
    },

    {
      email: "user1@example.com",
      firstname: "User1",
      preferredName: "User1",
      middleName: "Middle1",
      lastname: "Doe1",
      dateOfBirth: "6 July, 1973",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "448274",
        street: "Street1",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487181",
      currentStage: "preEmailVerification",
    },
    {
      email: "user2@example.com",
      firstname: "User2",
      preferredName: "User2",
      middleName: "Middle2",
      lastname: "Doe2",
      dateOfBirth: "26 February, 1978",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "720545",
        street: "Street2",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487182",
      currentStage: "preEmailVerification",
    },
    {
      email: "user3@example.com",
      firstname: "User3",
      preferredName: "User3",
      middleName: "Middle3",
      lastname: "Doe3",
      dateOfBirth: "12 March, 1962",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "130097",
        street: "Street3",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487183",
      currentStage: "preEmailVerification",
    },
    {
      email: "user4@example.com",
      firstname: "User4",
      preferredName: "User4",
      middleName: "Middle4",
      lastname: "Doe4",
      dateOfBirth: "10 December, 1977",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "272087",
        street: "Street4",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487184",
      currentStage: "preEmailVerification",
    },
    {
      email: "user5@example.com",
      firstname: "User5",
      preferredName: "User5",
      middleName: "Middle5",
      lastname: "Doe5",
      dateOfBirth: "2 June, 1963",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "477029",
        street: "Street5",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487185",
      currentStage: "preEmailVerification",
    },
    {
      email: "user6@example.com",
      firstname: "User6",
      preferredName: "User6",
      middleName: "Middle6",
      lastname: "Doe6",
      dateOfBirth: "14 May, 1984",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "581022",
        street: "Street6",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487186",
      currentStage: "preEmailVerification",
    },
    {
      email: "user7@example.com",
      firstname: "User7",
      preferredName: "User7",
      middleName: "Middle7",
      lastname: "Doe7",
      dateOfBirth: "8 August, 1989",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "361084",
        street: "Street7",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487187",
      currentStage: "preEmailVerification",
    },
    {
      email: "user8@example.com",
      firstname: "User8",
      preferredName: "User8",
      middleName: "Middle8",
      lastname: "Doe8",
      dateOfBirth: "25 April, 1982",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "788226",
        street: "Street8",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487188",
      currentStage: "preEmailVerification",
    },
    {
      email: "user9@example.com",
      firstname: "User9",
      preferredName: "User9",
      middleName: "Middle9",
      lastname: "Doe9",
      dateOfBirth: "16 September, 1976",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "134789",
        street: "Street9",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487189",
      currentStage: "preEmailVerification",
    },

    {
      email: "user1@example.com",
      firstname: "User1",
      preferredName: "User1",
      middleName: "Middle1",
      lastname: "Doe1",
      dateOfBirth: "6 July, 1973",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "448274",
        street: "Street1",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487181",
      currentStage: "preEmailVerification",
    },
    {
      email: "user2@example.com",
      firstname: "User2",
      preferredName: "User2",
      middleName: "Middle2",
      lastname: "Doe2",
      dateOfBirth: "26 February, 1978",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "720545",
        street: "Street2",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487182",
      currentStage: "preEmailVerification",
    },
    {
      email: "user3@example.com",
      firstname: "User3",
      preferredName: "User3",
      middleName: "Middle3",
      lastname: "Doe3",
      dateOfBirth: "12 March, 1962",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "130097",
        street: "Street3",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487183",
      currentStage: "preEmailVerification",
    },
    {
      email: "user4@example.com",
      firstname: "User4",
      preferredName: "User4",
      middleName: "Middle4",
      lastname: "Doe4",
      dateOfBirth: "10 December, 1977",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "272087",
        street: "Street4",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487184",
      currentStage: "preEmailVerification",
    },
    {
      email: "user5@example.com",
      firstname: "User5",
      preferredName: "User5",
      middleName: "Middle5",
      lastname: "Doe5",
      dateOfBirth: "2 June, 1963",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "477029",
        street: "Street5",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487185",
      currentStage: "preEmailVerification",
    },
    {
      email: "user10@example.com",
      firstname: "User10",
      preferredName: "User10",
      middleName: "Middle10",
      lastname: "Doe10",
      dateOfBirth: "30 November, 1981",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "502173",
        street: "Street10",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487190",
      currentStage: "preEmailVerification",
    },
    {
      email: "user11@example.com",
      firstname: "User11",
      preferredName: "User11",
      middleName: "Middle11",
      lastname: "Doe11",
      dateOfBirth: "3 October, 1985",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "689540",
        street: "Street11",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487191",
      currentStage: "preEmailVerification",
    },
    {
      email: "user12@example.com",
      firstname: "User12",
      preferredName: "User12",
      middleName: "Middle12",
      lastname: "Doe12",
      dateOfBirth: "17 December, 1987",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "965238",
        street: "Street12",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487192",
      currentStage: "preEmailVerification",
    },
    {
      email: "user13@example.com",
      firstname: "User13",
      preferredName: "User13",
      middleName: "Middle13",
      lastname: "Doe13",
      dateOfBirth: "22 January, 1983",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "570218",
        street: "Street13",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487193",
      currentStage: "preEmailVerification",
    },
    {
      email: "user14@example.com",
      firstname: "User14",
      preferredName: "User14",
      middleName: "Middle14",
      lastname: "Doe14",
      dateOfBirth: "9 February, 1975",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "105713",
        street: "Street14",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487194",
      currentStage: "preEmailVerification",
    },
    {
      email: "user20@example.com",
      firstname: "User20",
      preferredName: "User20",
      middleName: "Middle20",
      lastname: "Doe20",
      dateOfBirth: "23 July, 1987",
      bvnVerified: "",
      bvn: "",
      lastLogin: "",
      registrationDate: "",
      status: "active",
      location: {
        state: "Abuja",
        country: "Nigeria",
        postalCode: "437822",
        street: "Street20",
      },
      tier: "Tier A",
      totalPortfolioValue: "30,051,663.00",
      riskTolerance: "",
      riskProfile: "Conservative",
      phone: "08118487200",
      currentStage: "preEmailVerification",
    },
  ];

  return (
    <div className="h-[100vh] flex bg-backgroundColor ">
      <Sidebar />
      <div className="flex-1 h-full overflow-auto relative">
        <Topbar title={"Users"} />
        <div className="w-full  min-h-full h-auto mb-[50px] bg-backgroundColor p-[32px] max-2xl:p-[25.6px] flex flex-col gap-[32px] max-2xl:gap-[25.6px] max-[300px]:zoomMax300 max-[400px]:zoomMax400 max-sm:zoomMaxSm max-md:zoomMaxMd max-[850px]:zoomMax850 max-xl:zoomMaxXl ">
          <GeneralTable
            tableHeaders={tableHeaders}
            title={title}
            items={items}
          />
        </div>
      </div>
    </div>
  );
};

export default Users;
