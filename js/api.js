async function fetchingProfileData() {
  const url =
    "https://raw.githubusercontent.com/douglas81silveira/js-developer-portfolio/main/data/profile.json";

  const fetching = await fetch(url);
  return await fetching.json();
}
