import { Link, useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import { Button, Table, Switch } from "antd";
import dayjs from "dayjs";
import useTableSearch from "../../hooks/useTableSearch";
import useToggle from "../../hooks/useToggle";

const data = [
  {
    id: 1,
    bannerImg: "http://dummyimage.com/1920x1080.png/dddddd/000000",
    mobileBannerImg:
      "http://dummyimage.com/700x500.png/cc0000/ffffff",
    title: "Adventures of a Dentist",
    link: "https://g.co/massa/quis/augue.jsp?nulla=pharetra&justo=magna&aliquam=ac&quis=consequat&turpis=metus&eget=sapien&elit=ut&sodales=nunc&scelerisque=vestibulum",
    createdDate: "2/11/2024",
    visible: true,
  },
  {
    id: 2,
    bannerImg: "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
    mobileBannerImg:
      "http://dummyimage.com/700x500.png/dddddd/000000",
    title: "The Butterfly Effect 2",
    link: "https://myspace.com/elementum.png?elementum=at&nullam=turpis&varius=a&nulla=pede&facilisi=posuere&cras=nonummy&non=integer&velit=non&nec=velit&nisi=donec&vulputate=diam&nonummy=neque&maecenas=vestibulum&tincidunt=eget&lacus=vulputate&at=ut&velit=ultrices&vivamus=vel&vel=augue&nulla=vestibulum&eget=ante&eros=ipsum&elementum=primis&pellentesque=in&quisque=faucibus&porta=orci&volutpat=luctus&erat=et&quisque=ultrices&erat=posuere&eros=cubilia&viverra=curae&eget=donec&congue=pharetra&eget=magna&semper=vestibulum&rutrum=aliquet&nulla=ultrices&nunc=erat&purus=tortor&phasellus=sollicitudin&in=mi&felis=sit&donec=amet&semper=lobortis&sapien=sapien&a=sapien&libero=non&nam=mi&dui=integer&proin=ac&leo=neque&odio=duis&porttitor=bibendum&id=morbi&consequat=non&in=quam&consequat=nec&ut=dui&nulla=luctus&sed=rutrum&accumsan=nulla&felis=tellus",
    createdDate: "5/10/2024",
    visible: false,
  },
  {
    id: 3,
    bannerImg: "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
    mobileBannerImg:
      "http://dummyimage.com/700x500.png/dddddd/000000",
    title: "Day of the Jackal, The",
    link: "https://oakley.com/in/blandit/ultrices.jsp?odio=volutpat&donec=erat&vitae=quisque&nisi=erat&nam=eros&ultrices=viverra&libero=eget&non=congue&mattis=eget&pulvinar=semper&nulla=rutrum&pede=nulla&ullamcorper=nunc&augue=purus&a=phasellus&suscipit=in&nulla=felis&elit=donec&ac=semper",
    createdDate: "9/24/2023",
    visible: true,
  },
  {
    id: 4,
    bannerImg: "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
    mobileBannerImg:
      "http://dummyimage.com/700x500.png/dddddd/000000",
    title: "Slingshot, The (Kådisbellan)",
    link: "https://cbsnews.com/libero/convallis.jsp?aliquam=eget&lacus=tincidunt&morbi=eget&quis=tempus&tortor=vel&id=pede&nulla=morbi&ultrices=porttitor&aliquet=lorem&maecenas=id&leo=ligula&odio=suspendisse&condimentum=ornare&id=consequat&luctus=lectus&nec=in&molestie=est&sed=risus&justo=auctor&pellentesque=sed&viverra=tristique&pede=in&ac=tempus&diam=sit&cras=amet&pellentesque=sem&volutpat=fusce&dui=consequat&maecenas=nulla&tristique=nisl&est=nunc&et=nisl&tempus=duis&semper=bibendum&est=felis&quam=sed&pharetra=interdum&magna=venenatis&ac=turpis&consequat=enim&metus=blandit&sapien=mi&ut=in&nunc=porttitor&vestibulum=pede&ante=justo&ipsum=eu&primis=massa&in=donec&faucibus=dapibus&orci=duis&luctus=at&et=velit&ultrices=eu&posuere=est&cubilia=congue&curae=elementum&mauris=in&viverra=hac",
    createdDate: "12/4/2023",
    visible: true,
  },
  {
    id: 5,
    bannerImg: "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
    mobileBannerImg:
      "http://dummyimage.com/700x500.png/dddddd/000000",
    title: "Burlesque",
    link: "https://issuu.com/erat/quisque/erat/eros/viverra/eget/congue.js?pellentesque=quisque&eget=erat&nunc=eros&donec=viverra&quis=eget&orci=congue&eget=eget&orci=semper&vehicula=rutrum&condimentum=nulla&curabitur=nunc&in=purus&libero=phasellus&ut=in&massa=felis&volutpat=donec&convallis=semper&morbi=sapien&odio=a&odio=libero&elementum=nam&eu=dui&interdum=proin&eu=leo&tincidunt=odio&in=porttitor&leo=id&maecenas=consequat&pulvinar=in&lobortis=consequat&est=ut&phasellus=nulla&sit=sed&amet=accumsan&erat=felis&nulla=ut&tempus=at&vivamus=dolor&in=quis&felis=odio&eu=consequat&sapien=varius&cursus=integer&vestibulum=ac&proin=leo&eu=pellentesque&mi=ultrices&nulla=mattis&ac=odio&enim=donec&in=vitae&tempor=nisi&turpis=nam&nec=ultrices&euismod=libero&scelerisque=non&quam=mattis&turpis=pulvinar&adipiscing=nulla&lorem=pede&vitae=ullamcorper&mattis=augue&nibh=a&ligula=suscipit&nec=nulla&sem=elit&duis=ac&aliquam=nulla&convallis=sed&nunc=vel&proin=enim&at=sit&turpis=amet&a=nunc&pede=viverra&posuere=dapibus",
    createdDate: "1/19/2024",
    visible: false,
  },
  {
    id: 6,
    bannerImg: "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
    mobileBannerImg:
      "http://dummyimage.com/700x500.png/cc0000/ffffff",
    title: "Juice",
    link: "http://trellian.com/tortor/quis/turpis.png?cum=dictumst&sociis=maecenas&natoque=ut&penatibus=massa&et=quis&magnis=augue&dis=luctus&parturient=tincidunt&montes=nulla&nascetur=mollis&ridiculus=molestie&mus=lorem&vivamus=quisque&vestibulum=ut&sagittis=erat&sapien=curabitur&cum=gravida&sociis=nisi",
    createdDate: "11/23/2023",
    visible: false,
  },
  {
    id: 7,
    bannerImg: "http://dummyimage.com/1920x1080.png/dddddd/000000",
    mobileBannerImg:
      "http://dummyimage.com/700x500.png/dddddd/000000",
    title: "Trans-Atlantic Tunnel (Tunnel, The)",
    link: "https://amazonaws.com/enim/sit/amet/nunc.png?suspendisse=luctus&potenti=et&in=ultrices&eleifend=posuere&quam=cubilia&a=curae&odio=donec&in=pharetra&hac=magna&habitasse=vestibulum&platea=aliquet&dictumst=ultrices&maecenas=erat&ut=tortor&massa=sollicitudin&quis=mi&augue=sit&luctus=amet&tincidunt=lobortis&nulla=sapien&mollis=sapien&molestie=non&lorem=mi&quisque=integer&ut=ac&erat=neque&curabitur=duis",
    createdDate: "4/24/2024",
    visible: false,
  },
  {
    id: 8,
    bannerImg: "http://dummyimage.com/1920x1080.png/dddddd/000000",
    mobileBannerImg:
      "http://dummyimage.com/700x500.png/5fa2dd/ffffff",
    title: "World of Henry Orient, The",
    link: "https://mysql.com/purus/aliquet/at/feugiat/non/pretium.json?a=mauris&odio=enim&in=leo&hac=rhoncus&habitasse=sed&platea=vestibulum&dictumst=sit&maecenas=amet&ut=cursus&massa=id&quis=turpis&augue=integer&luctus=aliquet&tincidunt=massa&nulla=id",
    createdDate: "10/3/2023",
    visible: true,
  },
  {
    id: 9,
    bannerImg: "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
    mobileBannerImg:
      "http://dummyimage.com/700x500.png/dddddd/000000",
    title: "Teen Wolf Too",
    link: "http://cnbc.com/aliquet/ultrices/erat.jsp?platea=tempus&dictumst=semper&morbi=est&vestibulum=quam&velit=pharetra&id=magna&pretium=ac&iaculis=consequat&diam=metus&erat=sapien&fermentum=ut&justo=nunc&nec=vestibulum&condimentum=ante&neque=ipsum&sapien=primis&placerat=in&ante=faucibus&nulla=orci&justo=luctus&aliquam=et&quis=ultrices",
    createdDate: "3/27/2024",
    visible: false,
  },
  {
    id: 10,
    bannerImg: "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
    mobileBannerImg:
      "http://dummyimage.com/700x500.png/5fa2dd/ffffff",
    title: "My Friend Irma Goes West",
    link: "http://wikimedia.org/tellus/nisi/eu/orci.json?consequat=bibendum&in=morbi&consequat=non&ut=quam&nulla=nec&sed=dui&accumsan=luctus&felis=rutrum&ut=nulla&at=tellus&dolor=in&quis=sagittis&odio=dui&consequat=vel&varius=nisl&integer=duis&ac=ac&leo=nibh&pellentesque=fusce&ultrices=lacus&mattis=purus&odio=aliquet&donec=at&vitae=feugiat&nisi=non&nam=pretium&ultrices=quis&libero=lectus&non=suspendisse&mattis=potenti&pulvinar=in&nulla=eleifend&pede=quam&ullamcorper=a&augue=odio&a=in&suscipit=hac&nulla=habitasse&elit=platea&ac=dictumst&nulla=maecenas&sed=ut&vel=massa&enim=quis&sit=augue&amet=luctus&nunc=tincidunt&viverra=nulla&dapibus=mollis&nulla=molestie&suscipit=lorem&ligula=quisque&in=ut&lacus=erat&curabitur=curabitur&at=gravida&ipsum=nisi&ac=at&tellus=nibh&semper=in&interdum=hac&mauris=habitasse&ullamcorper=platea&purus=dictumst&sit=aliquam&amet=augue&nulla=quam&quisque=sollicitudin&arcu=vitae&libero=consectetuer&rutrum=eget&ac=rutrum&lobortis=at&vel=lorem&dapibus=integer&at=tincidunt&diam=ante",
    createdDate: "9/9/2023",
    visible: false,
  },
  {
    id: 11,
    bannerImg: "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
    mobileBannerImg:
      "http://dummyimage.com/700x500.png/cc0000/ffffff",
    title: "Jesse Stone: Benefit of the Doubt",
    link: "http://wordpress.com/duis/consequat/dui/nec.json?viverra=nisl&pede=duis&ac=bibendum&diam=felis&cras=sed&pellentesque=interdum&volutpat=venenatis&dui=turpis&maecenas=enim&tristique=blandit&est=mi&et=in&tempus=porttitor&semper=pede&est=justo&quam=eu&pharetra=massa&magna=donec&ac=dapibus&consequat=duis&metus=at&sapien=velit&ut=eu&nunc=est",
    createdDate: "9/27/2023",
    visible: true,
  },
  {
    id: 12,
    bannerImg: "http://dummyimage.com/1920x1080.png/dddddd/000000",
    mobileBannerImg:
      "http://dummyimage.com/700x500.png/dddddd/000000",
    title: "Black Waters of Echo's Pond, The",
    link: "https://yahoo.com/dui/maecenas/tristique/est/et.json?est=est&et=risus&tempus=auctor&semper=sed&est=tristique&quam=in&pharetra=tempus&magna=sit&ac=amet&consequat=sem&metus=fusce&sapien=consequat&ut=nulla&nunc=nisl&vestibulum=nunc&ante=nisl&ipsum=duis&primis=bibendum&in=felis&faucibus=sed&orci=interdum&luctus=venenatis&et=turpis&ultrices=enim&posuere=blandit&cubilia=mi&curae=in&mauris=porttitor&viverra=pede&diam=justo&vitae=eu&quam=massa&suspendisse=donec&potenti=dapibus&nullam=duis&porttitor=at&lacus=velit&at=eu&turpis=est&donec=congue&posuere=elementum&metus=in&vitae=hac&ipsum=habitasse&aliquam=platea&non=dictumst&mauris=morbi&morbi=vestibulum&non=velit&lectus=id&aliquam=pretium&sit=iaculis&amet=diam&diam=erat&in=fermentum&magna=justo",
    createdDate: "7/8/2023",
    visible: true,
  },
  {
    id: 13,
    bannerImg: "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
    mobileBannerImg:
      "http://dummyimage.com/700x500.png/ff4444/ffffff",
    title: "Heaven",
    link: "https://bbb.org/iaculis/justo/in/hac.js?vestibulum=volutpat&sit=sapien&amet=arcu&cursus=sed&id=augue&turpis=aliquam&integer=erat&aliquet=volutpat&massa=in&id=congue&lobortis=etiam&convallis=justo&tortor=etiam&risus=pretium&dapibus=iaculis&augue=justo&vel=in&accumsan=hac&tellus=habitasse&nisi=platea&eu=dictumst&orci=etiam&mauris=faucibus&lacinia=cursus&sapien=urna&quis=ut&libero=tellus&nullam=nulla&sit=ut",
    createdDate: "10/20/2023",
    visible: true,
  },
  {
    id: 14,
    bannerImg: "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
    mobileBannerImg:
      "http://dummyimage.com/700x500.png/5fa2dd/ffffff",
    title: "Glass-blower's Children, The (Glasblåsarns barn)",
    link: "http://squarespace.com/cubilia/curae.json?hac=justo&habitasse=aliquam&platea=quis&dictumst=turpis&maecenas=eget&ut=elit&massa=sodales&quis=scelerisque&augue=mauris&luctus=sit&tincidunt=amet&nulla=eros&mollis=suspendisse&molestie=accumsan&lorem=tortor&quisque=quis&ut=turpis&erat=sed&curabitur=ante&gravida=vivamus&nisi=tortor&at=duis&nibh=mattis&in=egestas&hac=metus&habitasse=aenean&platea=fermentum&dictumst=donec&aliquam=ut&augue=mauris",
    createdDate: "1/8/2024",
    visible: true,
  },
  {
    id: 15,
    bannerImg: "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
    mobileBannerImg:
      "http://dummyimage.com/700x500.png/ff4444/ffffff",
    title: "Romasanta: The Werewolf Hunt",
    link: "http://oaic.gov.au/purus/sit/amet/nulla/quisque/arcu/libero.png?erat=ligula&eros=nec&viverra=sem&eget=duis&congue=aliquam&eget=convallis&semper=nunc&rutrum=proin&nulla=at&nunc=turpis&purus=a&phasellus=pede&in=posuere&felis=nonummy&donec=integer&semper=non&sapien=velit&a=donec&libero=diam&nam=neque&dui=vestibulum&proin=eget&leo=vulputate&odio=ut&porttitor=ultrices&id=vel&consequat=augue&in=vestibulum&consequat=ante&ut=ipsum&nulla=primis&sed=in&accumsan=faucibus&felis=orci&ut=luctus&at=et&dolor=ultrices&quis=posuere&odio=cubilia&consequat=curae&varius=donec&integer=pharetra&ac=magna&leo=vestibulum&pellentesque=aliquet&ultrices=ultrices&mattis=erat&odio=tortor&donec=sollicitudin&vitae=mi&nisi=sit&nam=amet&ultrices=lobortis&libero=sapien&non=sapien&mattis=non&pulvinar=mi&nulla=integer&pede=ac&ullamcorper=neque&augue=duis&a=bibendum&suscipit=morbi&nulla=non&elit=quam&ac=nec&nulla=dui&sed=luctus&vel=rutrum&enim=nulla&sit=tellus&amet=in&nunc=sagittis&viverra=dui&dapibus=vel&nulla=nisl&suscipit=duis&ligula=ac&in=nibh&lacus=fusce&curabitur=lacus&at=purus&ipsum=aliquet&ac=at&tellus=feugiat&semper=non&interdum=pretium&mauris=quis&ullamcorper=lectus&purus=suspendisse&sit=potenti&amet=in&nulla=eleifend&quisque=quam&arcu=a&libero=odio&rutrum=in&ac=hac&lobortis=habitasse&vel=platea",
    createdDate: "11/29/2023",
    visible: true,
  },
  {
    id: 16,
    bannerImg: "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
    mobileBannerImg:
      "http://dummyimage.com/700x500.png/cc0000/ffffff",
    title: "Bikini Carwash Company, The",
    link: "http://google.fr/lorem/vitae/mattis/nibh/ligula.xml?risus=eros&auctor=vestibulum&sed=ac&tristique=est&in=lacinia&tempus=nisi&sit=venenatis&amet=tristique&sem=fusce&fusce=congue&consequat=diam&nulla=id&nisl=ornare&nunc=imperdiet&nisl=sapien&duis=urna&bibendum=pretium&felis=nisl&sed=ut&interdum=volutpat&venenatis=sapien&turpis=arcu&enim=sed&blandit=augue&mi=aliquam&in=erat&porttitor=volutpat&pede=in&justo=congue&eu=etiam&massa=justo&donec=etiam&dapibus=pretium&duis=iaculis&at=justo&velit=in&eu=hac&est=habitasse&congue=platea&elementum=dictumst&in=etiam&hac=faucibus&habitasse=cursus&platea=urna&dictumst=ut&morbi=tellus&vestibulum=nulla&velit=ut&id=erat&pretium=id&iaculis=mauris&diam=vulputate&erat=elementum&fermentum=nullam&justo=varius&nec=nulla&condimentum=facilisi&neque=cras&sapien=non&placerat=velit&ante=nec&nulla=nisi&justo=vulputate&aliquam=nonummy&quis=maecenas&turpis=tincidunt&eget=lacus&elit=at&sodales=velit&scelerisque=vivamus&mauris=vel&sit=nulla&amet=eget&eros=eros&suspendisse=elementum&accumsan=pellentesque&tortor=quisque&quis=porta&turpis=volutpat&sed=erat&ante=quisque&vivamus=erat&tortor=eros&duis=viverra&mattis=eget&egestas=congue&metus=eget&aenean=semper&fermentum=rutrum&donec=nulla",
    createdDate: "11/19/2023",
    visible: true,
  },
  {
    id: 17,
    bannerImg: "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
    mobileBannerImg:
      "http://dummyimage.com/700x500.png/dddddd/000000",
    title: "Indian Tomb, The (Das indische Grabmal)",
    link: "https://123-reg.co.uk/pharetra/magna/vestibulum/aliquet/ultrices/erat.jsp?eleifend=in&quam=hac",
    createdDate: "6/28/2023",
    visible: true,
  },
  {
    id: 18,
    bannerImg: "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
    mobileBannerImg:
      "http://dummyimage.com/700x500.png/dddddd/000000",
    title: "Song of the Exile (Ke tu qiu hen)",
    link: "http://github.com/duis.html?imperdiet=non&sapien=sodales&urna=sed&pretium=tincidunt&nisl=eu&ut=felis&volutpat=fusce&sapien=posuere&arcu=felis&sed=sed&augue=lacus&aliquam=morbi&erat=sem&volutpat=mauris&in=laoreet&congue=ut&etiam=rhoncus&justo=aliquet&etiam=pulvinar&pretium=sed&iaculis=nisl&justo=nunc&in=rhoncus&hac=dui&habitasse=vel&platea=sem&dictumst=sed&etiam=sagittis&faucibus=nam&cursus=congue&urna=risus&ut=semper&tellus=porta&nulla=volutpat&ut=quam&erat=pede&id=lobortis&mauris=ligula&vulputate=sit&elementum=amet&nullam=eleifend&varius=pede&nulla=libero&facilisi=quis&cras=orci&non=nullam&velit=molestie",
    createdDate: "8/16/2023",
    visible: true,
  },
  {
    id: 19,
    bannerImg: "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
    mobileBannerImg:
      "http://dummyimage.com/700x500.png/cc0000/ffffff",
    title: "Glass Menagerie, The",
    link: "https://tamu.edu/nascetur/ridiculus/mus.js?quisque=tincidunt&erat=ante&eros=vel&viverra=ipsum&eget=praesent&congue=blandit&eget=lacinia&semper=erat&rutrum=vestibulum&nulla=sed&nunc=magna&purus=at&phasellus=nunc&in=commodo&felis=placerat&donec=praesent&semper=blandit&sapien=nam&a=nulla&libero=integer&nam=pede&dui=justo&proin=lacinia&leo=eget&odio=tincidunt&porttitor=eget&id=tempus&consequat=vel&in=pede&consequat=morbi&ut=porttitor&nulla=lorem&sed=id&accumsan=ligula&felis=suspendisse&ut=ornare&at=consequat&dolor=lectus&quis=in&odio=est&consequat=risus&varius=auctor&integer=sed&ac=tristique&leo=in&pellentesque=tempus&ultrices=sit&mattis=amet&odio=sem&donec=fusce",
    createdDate: "4/24/2024",
    visible: false,
  },
  {
    id: 20,
    bannerImg: "http://dummyimage.com/1920x1080.png/dddddd/000000",
    mobileBannerImg:
      "http://dummyimage.com/700x500.png/cc0000/ffffff",
    title: "Agony and the Ecstasy of Phil Spector, The",
    link: "https://newyorker.com/mauris/viverra/diam/vitae.png?pretium=vestibulum&iaculis=rutrum&justo=rutrum&in=neque&hac=aenean&habitasse=auctor&platea=gravida&dictumst=sem&etiam=praesent&faucibus=id&cursus=massa&urna=id&ut=nisl&tellus=venenatis&nulla=lacinia&ut=aenean&erat=sit&id=amet&mauris=justo&vulputate=morbi&elementum=ut&nullam=odio&varius=cras&nulla=mi&facilisi=pede&cras=malesuada&non=in&velit=imperdiet&nec=et&nisi=commodo&vulputate=vulputate&nonummy=justo&maecenas=in&tincidunt=blandit",
    createdDate: "8/3/2023",
    visible: false,
  },
];

const Banner = () => {
  const navigate = useNavigate();
  const [open, handleOpen] = useToggle();

  const getColumnSearchProps = useTableSearch();

  const columns = [
    {
      title: "번호",
      dataIndex: "id",
      key: "id",
      width: 100,
      render: (value, record, index) => value,
      sorter: (a, b) => b.id - a.id,
      align: "center",
    },
    {
      title: "배너 이미지",
      dataIndex: "bannerImg",
      key: "bannerImg",
      render: (value) => <img src={value} style={{ width: 300 }} />,
      width: 300,
    },
    {
      title: "모바일 배너 이미지",
      dataIndex: "mobileBannerImg",
      key: "mobileBannerImg",
      render: (value) => <img src={value} style={{ width: 200 }} />,
      align: "center",
      width: 200,
    },
    {
      title: "제목",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
      render: (value) => value,
      align: "center",
      ...getColumnSearchProps("title"),
    },
    {
      title: "링크",
      dataIndex: "link",
      key: "link",
      sorter: (a, b) => a.link.localeCompare(b.link),
      render: (value) => (
        <a href={value} target="_blank" style={{ color: "#0575E6" }}>
          LINK
        </a>
      ),
      align: "center",
    },

    {
      title: "작성 날짜",
      dataIndex: "createdDate",
      key: "createdDate",
      render: (value, row) => (
        <p className="text-black">
          {dayjs(value).format("YYYY.MM.DD")}
        </p>
      ),
      sorter: (a, b) =>
        dayjs(a.createdDate).unix() - dayjs(b.createdDate).unix(),
      align: "center",
    },

    {
      title: "노출 여부",
      dataIndex: "visible",
      key: "visible",
      render: (data, record) => (
        <Switch
          checked={data}
          onChange={(value, e) => e.stopPropagation()}
          disabled
        />
      ),
      align: "center",
    },
    {
      title: "",
      dataIndex: "delete",
      key: "delete",
      render: (data, record) => (
        <Button
          danger
          onClick={(e) => {
            e.stopPropagation();
            handleOpen();
          }}
        >
          삭제
        </Button>
      ),
    },
  ];

  return (
    <article>
      <PageTitle
        title="배너관리"
        desc="배너를 관리할 수 있는 페이지입니다. 최대 5개까지 등록할 수 있습니다."
        addBtn={
          <Link to="create">
            <Button type="primary" size="large">
              배너 등록하기
            </Button>
          </Link>
        }
      />
      <Table
        dataSource={data}
        columns={columns}
        pagination={{
          position: ["bottomCenter"],
          showSizeChanger: false,
        }}
        onRow={(record, index) => ({
          onClick: () => navigate(`${record.id}`),
        })}
      ></Table>
    </article>
  );
};

export default Banner;
