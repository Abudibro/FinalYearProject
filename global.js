import { Dimensions } from "react-native";

const constants = {
	width: (Dimensions.get('window').width * 0.85) + 4,
	LOCATIONS: [
		{
			title: "St Mary's Church of England",
			address: "Bristol Rd, Selly Oak, Birmingham B29 6ND",
			area: "Selly Oak",
			parking: true,
			coordinates: [
				-1.943097,
				52.439152
			],
			id: "434bef4549ac359d74236f6353867db6"
		},
		{
			title: "Selly Oak Station",
			address: "Selly Oak, Birmingham B29 6NA",
			area: "Selly Oak",
			parking: true,
			coordinates: [
				-1.935608,
				52.441858
			],
			id: "a2011b7a9048cac236499bf9ff4037cf"
		},
		{
			title: "Tesco Express",
			address: "479 Bristol Rd, Bournbrook, Birmingham B29 6BA",
			area: "Selly Oak",
			parking: true,
			coordinates: [
				-1.934392,
				52.445445
			],
			id: "c28cdd16f6af645fab5314a1ef53edfc"
		},
		{
			title: "Selly Oak Shopping Park",
			address: "Selly Oak, Birmingham B29 6SN",
			area: "Selly Oak",
			parking: true,
			coordinates: [
				-1.940203,
				52.443586
			],
			id: "e3a71fba18f68fd4a9774f88a1778ce2"
		},
		{
			title: "ALDI",
			address: "Bristol Rd, Selly Oak, Birmingham B29 6AE",
			area: "Selly Oak",
			parking: true,
			coordinates: [
				-1.935651,
				52.444453
			],
			id: "ecd85982943c2eca5fef115f2e199343"
		}
	],
	MEETUP_TIMES_GRID: [
		[ false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false ]
	]
}

export default constants;