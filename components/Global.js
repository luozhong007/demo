/**
 * Created by luozhong on 16/12/21.
 */

let timeStr = new Date().getTime();
let Global = {
    activities: [{
        "activity_id": "57de3dce2b89241a47a74a88",
        "title": "\u56fd\u5e86\u6cf8\u6cbd\u6e56\uff0c\u8ba9\u6211\u4eec\u4e00\u8d77\u53bb\u98ce\u82b1\u96ea\u591c",
        "cover_img": "http://image.juletrip.com/FpceGEYNbCRc2V3-B5b_SLZMkU1c",
        "describe": "\u53bb\u6e56\u8fb9\u53d1\u5446\uff0c\u4f11\u95f2\u6e38\u73a9\uff0c\u6bd4\u5927\u7406\u66f4\u7f8e",
        "days": "3",
        "ts": 1474182606,
        "club": {"head_img": "http://image.juletrip.com/Fh_3AcB9Nu3yoqbI36L-dWN540L2", "club_id": "57d5ee8e2b8924036f3c4fea", "club_name": "\u4ff1\u4e50\u65c5\u884c"}
    }, {
        "activity_id": "57de41672b89241a47a74a8a",
        "title": "\u4f60\u4e0d\u77e5\u9053\u7684\u6700\u7f8e\u79cb\u8272\uff0c\u5510\u5bb6\u6cb3\u9752\u6eaa\u53e4\u9547\u5f69\u6797\u5b63",
        "cover_img": "http://image.juletrip.com/FhMKCiVRU5IQzdpbB5tRWYzyrQOd",
        "describe": "\u4f11\u95f2\u6237\u5916\uff0c\u5468\u672b\u5c31\u53bb\uff0c\u7ea2\u53f6\u6444\u5f71\uff0c\u7f8e\u7684\u8ff7\u4eba",
        "days": "2.5",
        "ts": 1474183527,
        "club": {"head_img": "http://image.juletrip.com/Fh_3AcB9Nu3yoqbI36L-dWN540L2", "club_id": "57d5ee8e2b8924036f3c4fea", "club_name": "\u4ff1\u4e50\u65c5\u884c"}
    }, {
        "activity_id": "581856612b89240b01fe4873",
        "title": "\u5468\u672b\u53bb\u4f5b\u9759\u5c71\u770b\u661f\u7a7a\u4e91\u6d77\u5c71\u9876\u8150\u8d25",
        "cover_img": "http://image.juletrip.com/FvDYyQ20t4OPwy6q7Cjf2-L5COmc",
        "describe": "\u55e8\uff5e\u55e8\uff5e\u6df7\u5e10\u3001\u706b\u9505\u3001\u8150\u8d25\u51fa\u884c",
        "days": "2",
        "ts": 1477989985,
        "club": {"head_img": "http://image.juletrip.com/Fh_3AcB9Nu3yoqbI36L-dWN540L2", "club_id": "57d5ee8e2b8924036f3c4fea", "club_name": "\u4ff1\u4e50\u65c5\u884c"}
    }, {
        "activity_id": "57d5f5522b8924036f3c4fec",
        "title": "\u5168\u65b0\u5ddd\u897f\u73af\u7ebf\uff0c\u627e\u5bfb\u6d77\u87ba\u6c9f\u6df1\u85cf\u4e0d\u9732\u7684\u7f8e",
        "cover_img": "http://image.juletrip.com/FgyclOkRw4RdnvyMbhJ5fyztcuVB",
        "describe": "\u56fd\u5e86\u907f\u5f00\u4eba\u6d41\uff0c\u6444\u5f71\u4f11\u95f2\u6e38\u73a9\uff0c\u6765\u4e00\u573a\u96ea\u5c71\u76db\u5bb4",
        "days": "4",
        "ts": 1473639762,
        "club": {"head_img": "http://image.juletrip.com/Fh_3AcB9Nu3yoqbI36L-dWN540L2", "club_id": "57d5ee8e2b8924036f3c4fea", "club_name": "\u4ff1\u4e50\u65c5\u884c"}
    }, {
        "activity_id": "57d5fdd12b8924036f3c4fee",
        "title": "\u82e5\u4e01\u5c71+\u96c5\u5bb6\u6897\uff0c\u5468\u672b\u4e00\u676f\u9152\uff0c\u4e00\u58f6\u8336\uff0c",
        "cover_img": "http://image.juletrip.com/FoMa6mvqiq-OgE08RRMgTmyyK0X7",
        "describe": "\u96ea\u5c71\u4e0b\u7684\u5c0f\u5c4b\uff0c\u5bf9\u7740\u661f\u7a7a\u9759\u9759\u5730\u53d1\u5446\uff0c\u8ba9\u751f\u6d3b\u66f4\u81ea\u7136",
        "days": "2",
        "ts": 1473641937,
        "club": {"head_img": "http://image.juletrip.com/Fh_3AcB9Nu3yoqbI36L-dWN540L2", "club_id": "57d5ee8e2b8924036f3c4fea", "club_name": "\u4ff1\u4e50\u65c5\u884c"}
    }, {
        "activity_id": "57de38ee2b89241a47a74a86",
        "title": "\u82e5\u4e01\u5c71+\u96c5\u5bb6\u6897\uff0c\u5468\u672b\u4e00\u676f\u9152\uff0c\u4e00\u58f6\u8336",
        "cover_img": "http://image.juletrip.com/Ft4SXJ5C9iqXQvjvgS5Q2bN-n89E",
        "describe": "\u96ea\u5c71\u4e0b\u7684\u5c0f\u5c4b\uff0c\u5bf9\u7740\u661f\u7a7a\u9759\u9759\u5730\u53d1\u5446\uff0c\u8ba9\u751f\u6d3b\u66f4\u81ea\u7136",
        "days": "2",
        "ts": 1474181358,
        "club": {"head_img": "http://image.juletrip.com/Fh_3AcB9Nu3yoqbI36L-dWN540L2", "club_id": "57d5ee8e2b8924036f3c4fea", "club_name": "\u4ff1\u4e50\u65c5\u884c"}
    }, {
        "activity_id": "57de3c502b89241a47a74a87",
        "title": "\u5168\u65b0\u5ddd\u897f\u73af\u7ebf\uff0c\u627e\u5bfb\u6d77\u87ba\u6c9f\u6df1\u85cf\u4e0d\u9732\u7684\u7f8e",
        "cover_img": "http://image.juletrip.com/Fq-RfOv7qgLFtjC8UUD8fUcc_f1e",
        "describe": "\u56fd\u5e86\u907f\u5f00\u4eba\u6d41\uff0c\u6444\u5f71\u4f11\u95f2\u6e38\u73a9\uff0c\u6765\u4e00\u573a\u96ea\u5c71\u76db\u5bb4",
        "days": "4",
        "ts": 1474182224,
        "club": {"head_img": "http://image.juletrip.com/Fh_3AcB9Nu3yoqbI36L-dWN540L2", "club_id": "57d5ee8e2b8924036f3c4fea", "club_name": "\u4ff1\u4e50\u65c5\u884c"}
    }, {
        "activity_id": "57d5f22d2b8924036f3c4feb",
        "title": "\u56fd\u5e86\u6cf8\u6cbd\u6e56\uff0c\u8ba9\u6211\u4eec\u4e00\u8d77\u53bb\u98ce\u82b1\u96ea\u591c",
        "cover_img": "http://image.juletrip.com/FgyTxpsIqluRBC-8PTFkxwlhvqu3",
        "describe": "\u56fd\u5e86\u907f\u5f00\u4eba\u6d41\uff0c\u53bb\u6e56\u8fb9\u53d1\u5446\uff0c\u4f11\u95f2\u6e38\u73a9",
        "days": "4",
        "ts": 1473638957,
        "club": {"head_img": "http://image.juletrip.com/Fh_3AcB9Nu3yoqbI36L-dWN540L2", "club_id": "57d5ee8e2b8924036f3c4fea", "club_name": "\u4ff1\u4e50\u65c5\u884c"}
    }]
};

module.exports = Global;