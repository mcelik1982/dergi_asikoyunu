const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Audio
	];
};
self.C3_JsPropNameTable = [
	{ark_giris: 0},
	{btn_nasiloynanir: 0},
	{karakter_gurban: 0},
	{karakter_mergen: 0},
	{ark_bilgi: 0},
	{btn_anasayfa: 0},
	{ark_oyun: 0},
	{gurban: 0},
	{mergen: 0},
	{kemik: 0},
	{yer_kemik1: 0},
	{skortabela: 0},
	{gurbanskor: 0},
	{mergenskor: 0},
	{Audio: 0},
	{halka: 0},
	{ark_bitis: 0},
	{tebrik_ozan: 0},
	{tebrik_destan: 0},
	{berabere: 0},
	{karaktersec: 0},
	{ark_basla: 0},
	{basla: 0}
];

self.InstanceType = {
	ark_giris: class extends self.ISpriteInstance {},
	btn_nasiloynanir: class extends self.ISpriteInstance {},
	karakter_gurban: class extends self.ISpriteInstance {},
	karakter_mergen: class extends self.ISpriteInstance {},
	ark_bilgi: class extends self.ISpriteInstance {},
	btn_anasayfa: class extends self.ISpriteInstance {},
	ark_oyun: class extends self.ISpriteInstance {},
	gurban: class extends self.ISpriteInstance {},
	mergen: class extends self.ISpriteInstance {},
	kemik: class extends self.ISpriteInstance {},
	yer_kemik1: class extends self.ISpriteInstance {},
	skortabela: class extends self.ISpriteInstance {},
	gurbanskor: class extends self.ISpriteInstance {},
	mergenskor: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	halka: class extends self.ISpriteInstance {},
	ark_bitis: class extends self.ISpriteInstance {},
	tebrik_ozan: class extends self.ISpriteInstance {},
	tebrik_destan: class extends self.ISpriteInstance {},
	berabere: class extends self.ISpriteInstance {},
	karaktersec: class extends self.ISpriteInstance {},
	ark_basla: class extends self.ISpriteInstance {},
	basla: class extends self.ISpriteInstance {}
}