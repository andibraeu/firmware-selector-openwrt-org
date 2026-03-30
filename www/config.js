/* exported config */

var config = {
  // Show help text for images
  show_help: true,

  // Versions list (optional if provided by .versions.json)
  versions: ["23.05.4", "19.07.10"],

  // Pre-selected version (optional if provided by .versions.json)
  default_version: "23.05.4",

  // Image download URL (e.g. "https://downloads.openwrt.org")
  image_url: "../misc",

  // Insert snapshot versions (optional)
  //show_snapshots: true,

  // Info link URL (optional)
  info_url: "https://openwrt.org/start?do=search&id=toh&q={title} @toh",

  // Attended Sysupgrade Server support (optional)
  asu_url: "https://sysupgrade.openwrt.org",
  asu_extra_packages: ["luci", "luci-app-attendedsysupgrade"],
  // Optional additional ASU repositories:
  // asu_repositories: {
  //   freifunk:
  //     "https://buildbot.weimarnetz.de/builds/brauhaus/packages/{openwrt_series}/{target}/{subtarget}/freifunk_packages/",
  // },
  // Template tags: {openwrt_version} (e.g. 25.12.1), {openwrt_series} (e.g. 25.12),
  // {target} (e.g. ath79), {subtarget} (e.g. generic)
};
