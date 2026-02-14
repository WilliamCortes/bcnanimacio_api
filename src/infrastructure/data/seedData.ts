import type { Artist } from "../../domain/entities/Artist";
import type { Client } from "../../domain/entities/Client";
import type { Service } from "../../domain/entities/Service";

export const seedArtists: Artist[] = [
  {
    id: "artist_joaquin_matas",
    slug: "joaquin-matas",
    category: "Magic",
    isFeatured: true,
    sortOrder: 10,
    nameCa: "Joaquín Matas",
    nameEs: "Joaquín Matas",
    nameEn: "Joaquín Matas",
    bioCa:
      "És l’únic il·lusionista que ha aconseguit els 4 passes d’or del jurat de Got Talent. Especialista en màgia d’escenari i màgia de prop, amb participació activa del públic i un toc d’humor i ironia.",
    bioEs:
      "Es el único ilusionista que ha conseguido los 4 pases de oro del jurado de Got Talent. Especialista en magia de escena y magia de cerca, con participación activa del público y un toque de humor e ironía.",
    bioEn:
      "The only illusionist to have achieved all four Golden Buzzers on Got Talent. He performs stage magic and close-up magic with strong audience participation and a signature blend of humor and irony.",
    imageUrl:
      "https://www.bcnanimacio.com/wp-content/uploads/2020/01/cuadrado-portadajoaquin-enero-2024-cat.jpg",
    youtubeIds: ["ieJ9zR6GBwQ"],
    isActive: true
  },
  {
    id: "artist_carles_sans",
    slug: "carles-sans",
    category: "Comedy",
    isFeatured: true,
    sortOrder: 20,
    nameCa: "Carles Sans",
    nameEs: "Carles Sans",
    nameEn: "Carles Sans",
    bioCa:
      "Conegut com «el guapo» de Tricicle. Un show especialment indicat per a esdeveniments, amb anècdotes divertidíssimes de la mítica companyia.",
    bioEs:
      "Conocido como «el guapo» de Tricicle. Un show especialmente indicado para eventos, con las anécdotas más divertidas de la mítica compañía.",
    bioEn:
      "Known as ‘the handsome one’ from Tricicle. A show designed for events, packed with the funniest anecdotes from the iconic comedy company.",
    imageUrl:
      "https://www.bcnanimacio.com/wp-content/uploads/2024/01/ccuadrado-portada-carles-sans-gener-2024-cat.jpg",
    youtubeIds: ["jUv75DfpQVA"],
    isActive: true
  },
  {
    id: "artist_kitflus_ensemble",
    slug: "kitflus-ensemble",
    category: "LiveMusic",
    isFeatured: true,
    sortOrder: 30,
    nameCa: "Kitflus Ensemble",
    nameEs: "Kitflus Ensemble",
    nameEn: "Kitflus Ensemble",
    bioCa:
      "Josep Mas, KITFLUS, és un dels grans noms de l’escena musical. Director musical i arreglista de Joan Manuel Serrat i col·laborador d’artistes com Alejandro Sanz, Joaquín Sabina i Mecano.",
    bioEs:
      "Josep Mas, KITFLUS, es uno de los grandes nombres de la escena musical. Director musical y arreglista de Joan Manuel Serrat y colaborador de artistas como Alejandro Sanz, Joaquín Sabina y Mecano.",
    bioEn:
      "Josep Mas (KITFLUS) is a leading name in Spain’s music scene. Serrat’s musical director and arranger, with collaborations spanning artists like Alejandro Sanz, Joaquín Sabina and Mecano.",
    imageUrl:
      "https://www.bcnanimacio.com/wp-content/uploads/2020/01/ccuadrado-portada-kitflus-gener-2024.jpg",
    youtubeIds: ["QSqOWV0esV8"],
    isActive: true
  },
  {
    id: "artist_stefano_palatchi",
    slug: "stefano-palatchi",
    category: "LiveMusic",
    isFeatured: true,
    sortOrder: 40,
    nameCa: "Stefano Palatchi",
    nameEs: "Stefano Palatchi",
    nameEn: "Stefano Palatchi",
    bioCa:
      "Cantant líric reconegut internacionalment i guanyador d’un Grammy Latino. Presenta un show de crooner a l’estil Tony Bennett, amb simpatia i gran poder de comunicació.",
    bioEs:
      "Cantante lírico reconocido internacionalmente y ganador de un Grammy Latino. Presenta un show de crooner al estilo Tony Bennett, con simpatía y gran poder de comunicación.",
    bioEn:
      "Internationally recognized lyrical singer and Latin Grammy winner. He delivers a crooner-style show in the spirit of Tony Bennett, combining technique, charm and stage presence.",
    imageUrl:
      "https://www.bcnanimacio.com/wp-content/uploads/2020/01/cuadrado-portada-stefano-300x174.jpg",
    youtubeIds: ["EE-M-9S3Umc"],
    isActive: true
  }
].sort((a, b) => b.sortOrder - a.sortOrder);

export const seedClients: Client[] = [
  { id: "client_bbva", name: "BBVA", sector: "Banking", sortOrder: 10, isActive: true },
  { id: "client_caixabank", name: "CaixaBank", sector: "Banking", sortOrder: 20, isActive: true },
  { id: "client_credit_andorra", name: "Crèdit Andorra", sector: "Banking", sortOrder: 30, isActive: true },
  { id: "client_cocacola", name: "Coca-Cola", sector: "Food & Beverage", sortOrder: 40, isActive: true },
  { id: "client_kraft", name: "Kraft", sector: "Food & Beverage", sortOrder: 50, isActive: true },
  { id: "client_fira", name: "Fira Barcelona", sector: "Events", sortOrder: 60, isActive: true },
  { id: "client_casino", name: "Casino Barcelona", sector: "Leisure", sortOrder: 70, isActive: true },
  { id: "client_grandvalira", name: "Grandvalira", sector: "Sports", sortOrder: 80, isActive: true }
].sort((a, b) => a.sortOrder - b.sortOrder);

export const seedServices: Service[] = [
  {
    id: "service_management",
    slug: "management",
    titleCa: "Management & Booking",
    titleEs: "Management & Booking",
    titleEn: "Management & Booking",
    descriptionCa: "Gestió integral d’artistes per a esdeveniments corporatius i privats.",
    descriptionEs: "Gestión integral de artistas para eventos corporativos y privados.",
    descriptionEn: "Full artist management for corporate and private events.",
    sortOrder: 10,
    isActive: true
  }
].sort((a, b) => a.sortOrder - b.sortOrder);

