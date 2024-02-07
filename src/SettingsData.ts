export interface ObsidianYouversionLinkerSettings {
	bibleLanguage: string;
	bibleVersion: string;
	linkPreviewRead: boolean;
	linkPreviewLive: boolean;
	trigger: string;
	selectedBooksLanguages: string[];
}

export const DEFAULT_SETTINGS: ObsidianYouversionLinkerSettings = {
	bibleLanguage: "eng",
	bibleVersion: "1",
	linkPreviewRead: true,
	linkPreviewLive: true,
	trigger: "@",
	selectedBooksLanguages: ["english"],
};
