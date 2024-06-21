const translates = {
	old_lingju: "SP灵雎",
	old_lingju_prefix: "SP",
	fenxin_old: "焚心",
	fenxin_old_info: "限定技，当你杀死一名非主公角色时，你可以与其交换未翻开的身份牌。（你的身份为主公时不能发动此技能）",
	sp_fuwan: "SP伏完",
	sp_fuwan_prefix: "SP",
	spfengyin: "奉印",
	spfengyin_info: "其他角色的回合开始时，若其体力值不少于你，你可以交给其一张【杀】，令其跳过出牌阶段和弃牌阶段。",
	spchizhong: "持重",
	spchizhong_info: "锁定技，你的手牌上限等于体力上限；其他角色死亡时，你加1点体力上限。",
	sp_fuhuanghou: "SP伏寿",
	sp_fuhuanghou_prefix: "SP",
	spcangni: "藏匿",
	spcangni_info: "弃牌阶段开始时，你可以回复1点体力或摸两张牌，然后将你的武将牌翻面；其他角色的回合内，当你获得（每回合限一次）/失去一次牌时，若你的武将牌背面朝上，你可以令该角色摸/弃置一张牌。",
	spmixin: "密信",
	spmixin_info: "出牌阶段限一次，你可以将一张手牌交给一名其他角色，该角色须对你选择的另一名角色使用一张无距离限制的【杀】，否则你选择的角色观看其手牌并获得其中一张。",
	sp_jiben: "SP吉本",
	sp_jiben_prefix: "SP",
	spduanzhi: "断指",
	spduanzhi_info: "当你成为其他角色使用的牌的目标后，你可以弃置其至多两张牌，然后失去1点体力。",
	spduyi: "毒医",
	spduyi2: "毒医",
	spduyi_info: "出牌阶段限一次，你可以亮出牌堆顶的一张牌并交给一名角色，若此牌为黑色，该角色不能使用或打出手牌，直到回到结束。",
	sp_mushun: "SP穆顺",
	sp_mushun_prefix: "SP",
	libai: "李白",
	dclbjiuxian: "酒仙",
	dclbjiuxian_info: "①你可以将额定目标数大于1的锦囊牌当做【酒】使用。②你使用【酒】无次数限制。",
	dcshixian: "诗仙",
	dcshixian_yayun: "押韵",
	dcshixian_info: "当你使用一张牌时，若此牌的牌名与你于本局游戏使用的上一张牌的牌名押韵，则你可以摸一张牌，并令此牌额外结算一次。",
	taoshen: "涛神",
	dcnutao: "怒涛",
	dcnutao_info: "锁定技。①当你使用锦囊牌指定第一个目标时，若目标角色包含其他角色，你随机对其中一名其他目标角色造成1点雷电伤害。②当你于出牌阶段造成雷电伤害后，你于此阶段使用【杀】的次数上限+1。",
	sunwukong: "孙悟空",
	dcjinjing: "金睛",
	dcjinjing_info: "锁定技。其他角色的手牌对你可见。",
	dccibei: "慈悲",
	dccibei_info: "每回合每名角色限一次。当你对其他角色造成伤害时，你可以防止此伤害，然后摸五张牌。",
	dcruyi: "如意",
	dcruyi_info: "锁定技。①游戏开始时，你将【如意金箍棒】置入装备区。②你手牌区内的武器牌均视为【杀】，且你不是武器牌的合法目标。③当你即将失去【如意金箍棒】或即将废除武器栏时，取消之。④你不能将装备区内的【如意金箍棒】当做其他牌使用或打出。",
	ruyijingubang: "如意金箍棒",
	// ruyijingubang_skill:'如意',
	ruyijingubang_skill: "如意金箍棒",
	ruyijingubang_effect: "如意金箍棒",
	ruyijingubang_info: "出牌阶段限一次。你可以将此牌的实际攻击范围调整为1~4内的任意整数。你根据此牌的实际攻击范围拥有对应的效果：<br><li>⑴你使用【杀】无次数限制。<br><li>⑵你使用的【杀】伤害+1。<br><li>⑶你使用的【杀】不可被响应。<br><li>⑷你使用【杀】选择目标后，可以增加一个额外目标。",
	longwang: "龙王",
	dclonggong: "龙宫",
	dclonggong_info: "每回合限一次。当你受到伤害时，你可以防止此伤害，然后令伤害来源从牌堆中获得一张装备牌。",
	dcsitian: "司天",
	dcsitian_info: "出牌阶段，你可以弃置两张颜色不同的手牌。系统从所有天气中随机选择两个，你观看这些天气并选择一个执行。<br><li>烈日：你对其他角色依次造成1点火属性伤害。<br><li>雷电：你令其他角色各进行一次判定。若结果为♠2~9，则其受到3点无来源雷属性伤害。<br><li>大浪：你弃置其他角色装备区内的所有牌（装备区内没有牌的角色改为失去1点体力）。<br><li>暴雨：你弃置一名角色的所有手牌。若其没有手牌，则改为令其失去1点体力。<br><li>大雾：你令所有其他角色获得如下效果：当其使用下一张基本牌时，取消之。",
	sunyang: "孙杨",
	clbshuijian: "水箭",
	clbshuijian_info: "摸牌阶段开始时，你可以令额定摸牌数+X（X为你装备区内牌数的一半+1，且向下取整）。",
	yeshiwen: "叶诗文",
	clbjisu: "急速",
	clbjisu_info: "判定阶段开始前，你可以跳过本回合的判定阶段和摸牌阶段，视为对一名其他角色使用一张【杀】。",
	clbshuiyong: "水泳",
	clbshuiyong_info: "锁定技。当你受到火属性伤害时，取消之。",
	xiaoyuehankehan: "小约翰可汗",
	dctongliao: "通辽",
	dctongliao_info: "①摸牌阶段结束时，你可以选择一张点数最小的手牌，将此牌标记为“通辽”。②当你失去一张具有“通辽”标签的牌时，你摸X张牌（X为此牌点数）。",
	dcwudao: "悟道",
	dcwudao_info: "当你使用牌结算结束后，若你使用的上一张牌与此牌类型相同，则你可以于本回合内获得如下效果：当你于回合内使用该类型的牌时，你令此牌不可被响应且伤害值基数+1。",
	zhutiexiong: "朱铁雄",
	wu_zhutiexiong: "朱铁雄",
	dcbianzhuang: "变装",
	dcbianzhuang_info: "①出牌阶段限一次，你可以从系统随机选择的两个技能中获得一个，并视为使用一张【杀】（无距离次数限制），然后失去以此法获得的技能。②当你使用装备牌后，你清空此技能的发动次数记录。③当你发动〖变装①〗后，若你发动〖变装①〗的次数大于2，则你将武将牌变更为诸葛亮，并将系统选择的技能数改为三个。",
	dc_caocao: "经典曹操",
	dc_caocao_prefix: "经典",
	dcjianxiong: "奸雄",
	dcjianxiong_info: "当你受到伤害后，你可以摸一张牌并获得对你造成伤害的牌，然后你令此技能摸牌数+1（至多为5）。",
	dc_liubei: "经典刘备",
	dc_liubei_prefix: "经典",
	dcrende: "仁德",
	dcrende_info: "出牌阶段每名角色限一次。你可以获得一名其他角色两张手牌，然后视为使用一张基本牌。",
	dc_sunquan: "经典孙权",
	dc_sunquan_prefix: "经典",
	dczhiheng: "制衡",
	dczhiheng_info: "①出牌阶段限一次。你可以弃置任意张牌并摸等量的牌，若你在发动〖制衡〗时弃置了所有手牌，则你多摸一张牌。②每回合每名角色限一次。当你对其他角色造成伤害后，你令〖制衡①〗于此回合发动次数上限+1。",
	nezha: "哪吒",
	dcsantou: "三头",
	dcsantou_info: "锁定技，当你受到伤害时，防止之，然后若以下有条件成立，你失去1点体力：1.你于本回合此前以此法防止过该伤害来源的伤害，且你的体力值不小于3；2.本次伤害为属性伤害，且你的体力值为2；3.本次伤害的渠道为红色的牌，且你的体力值为1。",
	dcfaqi: "法器",
	dcfaqi_info: "当你于出牌阶段使用装备牌结算结束后，你视为使用一张本回合未以此法使用过的普通锦囊牌。",
	dc_sunce: "经典孙策",
	dc_sunce_prefix: "经典",
	dcshuangbi: "双壁",
	dcshuangbi_info: "出牌阶段限一次，你可以选择一项：①摸X张牌，本回合手牌上限+X；②弃置至多X张牌，随机对其他角色造成等量火焰伤害；③视为使用X张火【杀】或【火攻】。（X为场上存活角色数）",
	dc_zhaoyun: "经典神赵云",
	dc_zhaoyun_prefix: "经典神",
	dclonghun: "龙魂",
	dclonghun_info: "每回合限20次，你可以将你的牌按下列规则使用或打出：红桃当【桃】，方块当火【杀】，梅花当【闪】，黑桃当【无懈可击】。",
	dczhanjiang: "斩将",
	dczhanjiang_info: "准备阶段，若场上有【青釭剑】，则你可以获得之。",

	dc_wuyi: "经典吴懿",
	dc_wuyi_prefix: "经典",
	dcbenxi: "奔袭",
	dcbenxi_info: "转换技，锁定技。当你失去手牌后，阴：系统随机检索出一句转换为拼音后包含“wu,yi”的技能台词，然后你念出此台词。阳：你获得上次所念出的台词对应的技能；若你已拥有该技能，则改为对其他角色各造成1点伤害。",
	quyuan: "屈原",
	dcqiusuo: "求索",
	dcqiusuo_info: "当你造成或受到伤害后，你可以从牌堆或弃牌堆中获得一张【铁索连环】。",
	dclisao: "离骚",
	dclisao_info: "出牌阶段限一次，你可以选择至多两名角色，这些角色须同时回答《离骚》的句段填空（抢答题，一名角色回答正确后结束答题）。回答正确的角色展示所有手牌，其余角色本回合不能响应你使用的牌且受到的伤害翻倍。",
	xin_sunquan: "会玩孙权",
	xin_sunquan_ab: "孙权",
	dchuiwan: "会玩",
	dchuiwan_info: "每回合每种牌名限一次，当你摸牌时，你可以放弃摸牌并改为选择至多等同于摸牌数的基本牌或锦囊牌的牌名，然后你从牌堆中获得这些牌名的牌。",
	dchuanli: "唤理",
	dchuanli_info: "结束阶段，若你本回合：使用牌至少指定三次自己为目标，则你可以令一名其他角色的所有技能失效，然后其获得〖直谏〗和〖固政〗，直到其下回合结束；使用牌至少指定三次一名其他角色为目标，则你可以令其所有技能失效，然后其获得〖英姿〗和〖反间〗，直到其下回合结束。然后若你两项均执行，你获得〖制衡〗直到你的下个回合结束。",
};

export default translates;
