const fs = require('fs');

const firstPage = () => {
  const imageBuffer = fs.readFileSync('./logo.jpg');
  const imageBase64 = imageBuffer.toString('base64');

  return `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">
  <head>
    <title></title>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <br />
    <style type="text/css">
      <!--
      	p {margin: 0; padding: 0;}	.ft10{font-size:10px;font-family:Times;color:#000000;}
      	.ft11{font-size:10px;font-family:Times;color:#000080;}
      	.ft12{font-size:13px;font-family:Times;color:#000000;}
      	.ft13{font-size:13px;font-family:Times;color:#000000;}
      	.ft14{font-size:13px;font-family:Times;color:#000000;}
      	.ft15{font-size:11px;font-family:Times;color:#000000;}
      	.ft16{font-size:13px;line-height:17px;font-family:Times;color:#000000;}
      -->
    </style>
  </head>
  <body bgcolor="#fff" vlink="blue" link="blue">
  
      <img
      height="150"
      style="margin: auto; margin-bottom: -130px; display: block"
       src="data:image/jpeg;base64,${imageBase64}"
      />
    <div
      style="position: relative; width: 100vw; height: 1263px"
    >
      <p
        style="position: absolute; top: 148px; left: 334px; white-space: nowrap"
        class="ft10"
        ><b
          >RFID-Planet,&#160;Am&#160;Hang&#160;2,&#160;46282&#160;Dorsten</b
        ></p
      >
      <p
        style="position: absolute; top: 161px; left: 244px; white-space: nowrap"
        class="ft10"
        ><b
          >Tel:&#160;02362&#160;-&#160;70&#160;344&#160;00&#160;Fax:&#160;02362&#160;-&#160;70&#160;344&#160;02&#160;E-Mail:&#160;info@rfid-planet.de</b
        ></p
      >
      <p
        style="position: absolute; top: 175px; left: 397px; white-space: nowrap"
        class="ft10"
        ><b>&#160;Onlineshop&#160;B2B&#160;</b></p
      >
      <p
        style="position: absolute; top: 189px; left: 393px; white-space: nowrap"
        class="ft11"
        ><a href="http://www.rfid-planet.de/"><b>www.rfid-planet.de</b></a></p
      >
      <p
        style="position: absolute; top: 224px; left: 85px; white-space: nowrap"
        class="ft12"
        >Sehr&#160;geehrte&#160;Frau&#160;</p
      >
      <p
        style="position: absolute; top: 223px; left: 211px; white-space: nowrap"
        class="ft13"
        ><b>Dr.&#160;Sabine&#160;Geiling</b>,</p
      >
      <p
        style="position: absolute; top: 262px; left: 85px; white-space: nowrap"
        class="ft16"
        >als&#160;Fachhändler&#160;für&#160;Produkte&#160;aus&#160;dem&#160;Bereich&#160;der&#160;<b>Radio-Frequenz-Technologie</b>&#160;möchten&#160;wir&#160;Sie&#160;auf&#160;eine&#160;<br /><b
          >Produktneuheit&#160;</b
        >zur&#160;sicheren&#160;Identifizierung&#160;von&#160;Tieren&#160;hinweisen:</p
      >
      <p
        style="position: absolute; top: 314px; left: 85px; white-space: nowrap"
        class="ft16"
        >Die&#160;<b>neue&#160;Chipgröße</b>&#160;von&#160;<b>1,25&#160;x&#160;8,3&#160;</b>mm&#160;ist&#160;mit&#160;der&#160;dazugehörigen&#160;Kanüle&#160;das&#160;aktuell&#160;<b>kleinste</b>&#160;und&#160;damit&#160;<br /><b
          >verträglichste</b
        >&#160;RFID-Produkt.</p
      >
      <p
        style="position: absolute; top: 365px; left: 85px; white-space: nowrap"
        class="ft16"
        >Dieser&#160;<b>weltweit</b>&#160;kleinste&#160;Tierchip&#160;wird&#160;von&#160;unserem&#160;Partner&#160;<b>Smartrac</b>&#160;in&#160;Deutschland&#160;hergestellt&#160;und&#160;ist&#160;<br />selbstverständlich&#160;<b>ICAR-&#160;und&#160;ISO-zertifiziert</b>.</p
      >
      <p
        style="position: absolute; top: 417px; left: 85px; white-space: nowrap"
        class="ft16"
        >Nach&#160;der&#160;Markteinführung&#160;in&#160;Frankreich&#160;möchten&#160;wir&#160;diesen&#160;Chip&#160;nun&#160;auch&#160;für&#160;Nutzer&#160;in&#160;Deutschland&#160;<br />bereitstellen.&#160;Durch&#160;unsere&#160;Einkaufsgemeinschaft&#160;haben&#160;wir&#160;die&#160;Möglichkeit&#160;Ihnen&#160;dieses&#160;Produkt&#160;zur&#160;Zeit&#160;<br /><b
          >versandkostenfrei</b
        >&#160;und&#160;zum&#160;<b>Großhandelspreis</b>&#160;anbieten&#160;zu&#160;können.</p
      >
      <p
        style="position: absolute; top: 486px; left: 85px; white-space: nowrap"
        class="ft16"
        >Den&#160;sterilisierten&#160;und&#160;versiegelten&#160;Verpackungen&#160;liegen&#160;die&#160;dazugehörigen&#160;Barcode-Etiketten&#160;für&#160;eine&#160;<br />einfache&#160;Handhabung&#160;bei.&#160;Es&#160;können&#160;die&#160;bisherigen&#160;Lesegeräte&#160;zum&#160;Auslesen&#160;der&#160;Chips&#160;verwendet&#160;werden<br />(Unterstützt&#160;die&#160;Frequenzen&#160;125.0&#160;kHz&#160;±&#160;3&#160;kHz&#160;und&#160;134.2&#160;kHz&#160;±&#160;3&#160;kHz).<br />Die&#160;Kanüle&#160;ist&#160;wie&#160;gewohnt&#160;aus&#160;rostfreiem&#160;Stahl,&#160;mit&#160;Facettenschnitt&#160;und&#160;Schutzkappe.<br />Die&#160;biokompatible&#160;Parylenbeschichtung&#160;auf&#160;dem&#160;Transponder&#160;verhindert&#160;das&#160;Wandern&#160;im&#160;Körper.<br />Jeder&#160;Chip&#160;enthält&#160;einen&#160;weltweit&#160;einmaligen&#160;15-stelligen&#160;Identifikationscode&#160;mit&#160;internationalem&#160;<br />Herstellercode&#160;992&#160;des&#160;Marktführers&#160;Smartrac&#160;nach&#160;<b>ISO&#160;11784/11785</b>.</p
      >
      <p
        style="position: absolute; top: 624px; left: 112px; white-space: nowrap"
        class="ft12"
        >&#160;<b>Made&#160;in&#160;Germany&#160;!</b></p
      >
      <p
        style="position: absolute; top: 643px; left: 139px; white-space: nowrap"
        class="ft12"
        >(Premium&#160;Qualität,&#160;wird&#160;bereits&#160;im&#160;Frauenhofer&#160;Institut&#160;verwendet)</p
      >
      <p
        style="position: absolute; top: 661px; left: 112px; white-space: nowrap"
        class="ft12"
        >&#160;<b
          >Kleinster&#160;ICAR-zertifizierter&#160;Tierchip&#160;der&#160;Welt&#160;!</b
        ></p
      >
      <p
        style="position: absolute; top: 681px; left: 139px; white-space: nowrap"
        class="ft12"
        >(Maximale&#160;Schmerzreduktion,&#160;kleinster&#160;Chip=kleinste&#160;Nadel)</p
      >
      <p
        style="position: absolute; top: 698px; left: 112px; white-space: nowrap"
        class="ft12"
        >&#160;<b
          >Markteinführung,&#160;nun&#160;auch&#160;in&#160;Deutschland&#160;erhältlich&#160;!</b
        ></p
      >
      <p
        style="position: absolute; top: 718px; left: 139px; white-space: nowrap"
        class="ft12"
        >(mittlerweile&#160;bei&#160;über&#160;2000&#160;Praxen&#160;im&#160;Einsatz)</p
      >
      <p
        style="position: absolute; top: 736px; left: 112px; white-space: nowrap"
        class="ft12"
        >&#160;<b
          >Jetzt&#160;telefonisch&#160;vorbestellen&#160;und&#160;Projektpreise&#160;dauerhaft&#160;sichern&#160;!</b
        ></p
      >
      <p
        style="position: absolute; top: 756px; left: 139px; white-space: nowrap"
        class="ft12"
        >&#160;(im&#160;Online&#160;Shop&#160;bitte&#160;entsprechende&#160;Rabatt&#160;<i>Codes</i>&#160;verwenden)</p
      >
      <p
        style="position: absolute; top: 792px; left: 138px; white-space: nowrap"
        class="ft12"
        >a<b
          >b&#160;&#160;&#160;&#160;&#160;&#160;10&#160;Stück&#160;2,99&#160;&#160;€</b
        ></p
      >
      <p
        style="position: absolute; top: 792px; left: 511px; white-space: nowrap"
        class="ft14"
        ><i>Nano</i></p
      >
      <p
        style="position: absolute; top: 794px; left: 548px; white-space: nowrap"
        class="ft15"
        ><i>10</i></p
      >
      <p
        style="position: absolute; top: 810px; left: 138px; white-space: nowrap"
        class="ft13"
        ><b
          >ab&#160;&#160;&#160;&#160;&#160;&#160;50&#160;Stück&#160;2,66&#160;&#160;€</b
        ></p
      >
      <p
        style="position: absolute; top: 810px; left: 511px; white-space: nowrap"
        class="ft14"
        ><i>Nano</i></p
      >
      <p
        style="position: absolute; top: 812px; left: 548px; white-space: nowrap"
        class="ft15"
        ><i>20</i></p
      >
      <p
        style="position: absolute; top: 828px; left: 138px; white-space: nowrap"
        class="ft13"
        ><b
          >ab&#160;&#160;&#160;&#160;100&#160;Stück&#160;2,50&#160;&#160;€</b
        ></p
      >
      <p
        style="position: absolute; top: 828px; left: 511px; white-space: nowrap"
        class="ft14"
        ><i>Nano</i></p
      >
      <p
        style="position: absolute; top: 830px; left: 548px; white-space: nowrap"
        class="ft15"
        ><i>25</i></p
      >
      <p
        style="position: absolute; top: 846px; left: 138px; white-space: nowrap"
        class="ft13"
        ><b
          >ab&#160;&#160;&#160;&#160;500&#160;Stück&#160;2,33&#160;&#160;€</b
        ></p
      >
      <p
        style="position: absolute; top: 846px; left: 511px; white-space: nowrap"
        class="ft14"
        ><i>Nano</i></p
      >
      <p
        style="position: absolute; top: 848px; left: 548px; white-space: nowrap"
        class="ft15"
        ><i>30</i></p
      >
      <p
        style="position: absolute; top: 865px; left: 138px; white-space: nowrap"
        class="ft13"
        ><b>ab&#160;&#160;1000&#160;Stück&#160;1,99&#160;&#160;€&#160;</b></p
      >
      <p
        style="position: absolute; top: 865px; left: 511px; white-space: nowrap"
        class="ft14"
        ><i>Nano</i></p
      >
      <p
        style="position: absolute; top: 867px; left: 548px; white-space: nowrap"
        class="ft15"
        ><i>40</i></p
      >
      <p
        style="position: absolute; top: 883px; left: 138px; white-space: nowrap"
        class="ft13"
        ><b
          >ab&#160;&#160;4000&#160;Stück&#160;1,83&#160;&#160;€&#160;&#160;(netto&#160;Preise)</b
        ></p
      >
      <p
        style="position: absolute; top: 883px; left: 511px; white-space: nowrap"
        class="ft14"
        ><i>Nano</i></p
      >
      <p
        style="position: absolute; top: 885px; left: 548px; white-space: nowrap"
        class="ft15"
        ><i>45</i></p
      >
      <p
        style="position: absolute; top: 919px; left: 112px; white-space: nowrap"
        class="ft12"
        >&#160;<b>Kauf&#160;auf&#160;Rechnung&#160;!</b></p
      >
      <p
        style="position: absolute; top: 938px; left: 139px; white-space: nowrap"
        class="ft12"
        >(14&#160;Tage&#160;Zahlungsziel&#160;bei&#160;telefonischer&#160;Bestellung)</p
      >
      <p
        style="position: absolute; top: 956px; left: 112px; white-space: nowrap"
        class="ft12"
        >&#160;<b
          >Ländercode&#160;Deutschland&#160;276.099.2xx.xxx.xxx&#160;!</b
        ></p
      >
      <p
        style="position: absolute; top: 976px; left: 138px; white-space: nowrap"
        class="ft12"
        >(ohne&#160;Aufpreis&#160;wählbar)</p
      >
      <p
        style="position: absolute; top: 993px; left: 112px; white-space: nowrap"
        class="ft12"
        >&#160;<b
          >Versandkosten&#160;frei,&#160;Lieferung&#160;mit&#160;DHL&#160;!</b
        ></p
      >
      <p
        style="position: absolute; top: 995px; left: 511px; white-space: nowrap"
        class="ft14"
        ><i>DHL100&#160;(kombinierbar)</i></p
      >
      <p
        style="position: absolute; top: 1031px; left: 85px; white-space: nowrap"
        class="ft16"
        >Mit&#160;diesem&#160;Schreiben&#160;erhalten&#160;Sie&#160;kostenlos&#160;ein&#160;<b>Probeexemplar&#160;</b>damit&#160;Sie&#160;sich&#160;von&#160;der&#160;Qualität&#160;und&#160;der&#160;<br />Nadelgröße&#160;bzw.&#160;Chipgröße&#160;selbst&#160;überzeugen&#160;können,&#160;dieses&#160;ist&#160;voll&#160;funktionsfähig,&#160;steril&#160;und&#160;direkt&#160;<br />einsatzbereit.&#160;Außerdem&#160;finden&#160;Sie&#160;ein&#160;unverbindliches&#160;persönliches&#160;Angebot&#160;anbei.</p
      >
      <p
        style="position: absolute; top: 1100px; left: 85px; white-space: nowrap"
        class="ft16"
        >Mit&#160;freundlichem&#160;Gruß&#160;<br />Timo&#160;Hartweck</p
      >
    </div>
  </body>
</html>`;
};

const otherPage = (results) => {
  const imageBuffer = fs.readFileSync('./logo.jpg');
  const imageBase64 = imageBuffer.toString('base64');
  return `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">
  <head>
    <title></title>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <br />
    <style type="text/css">
      p {
        margin: 0;
        padding: 0;
      }
      .ft10 {
        font-size: 10px;
        font-family: Times;
        color: #000000;
      }
      .ft11 {
        font-size: 10px;
        font-family: Times;
        color: #000080;
      }
      .ft12 {
        font-size: 13px;
        font-family: Times;
        color: #000000;
      }
      .ft13 {
        font-size: 13px;
        font-family: Times;
        color: #000000;
      }
      .ft14 {
        font-size: 13px;
        font-family: Times;
        color: #000000;
      }
      .ft15 {
        font-size: 11px;
        font-family: Times;
        color: #000000;
      }
      .ft16 {
        font-size: 13px;
        line-height: 17px;
        font-family: Times;
        color: #000000;
      }

      table {
        width: 100%;
        border-collapse: collapse;
      }

      td,
      th {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
      }

      th {
        background-color: #f2f2f2;
      }
    </style>
  </head>
  <body
    style="display: flex; flex-direction: column; padding: 10px 40px; gap: 1em"
    bgcolor="#fff"
    vlink="blue"
    link="blue"
  >
    <div
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
      "
    >
      <p>RFID-Planet</p>
      <p>Am Hang 2, 46282 Dorsten</p>
      <p
        >Tel 02362 - 70 344 00 Fax 02362 - 70 344 02 mail:
        info@rfid-planet.de</p
      >
      <p>Onlineshop B2B</p>
      <p>www.rfid-planet.de</p>
    </div>
    <div
      style="display: flex; justify-content: space-between; align-items: center"
    >
      <div>
        <p style="margin-bottom: 10px; font-weight: 600"
          >Kostenloses Muster, kleinster Tierchip der Welt !</p
        >
        <p>Tierarztpraxis</p>
        <p>Dr. Karin Schmidt</p>
        <p>Alte Str. 9</p>
        <p>97215 Uffenheim</p>
      </div>
      <div>
        <img src="data:image/jpeg;base64,${imageBase64}" alt="" style="height: 250px" />
        <div style="display: flex; justify-content: space-between">
          <p>Kunden Nr.:</p> <p>77206451</p>
        </div>
        <div style="display: flex; justify-content: space-between">
          <p>Bearbeiter:</p><p>Hartweck, Timo</p>
        </div>
        <div style="display: flex; justify-content: space-between">
          <p>Steuernr.:</p><p>531 9521 4622</p>
        </div>
        <div style="display: flex; justify-content: space-between">
          <p>USt-Id:</p> <p>DE321737151</p>
        </div>
        <div style="display: flex; justify-content: space-between">
          <p>Datum:</p><p>23.01.2023</p>
        </div>
      </div>
    </div>
    <h3>Lieferschein Nr. 201909015</h3>
    <table style="margin-bottom: 50px; margin-top: 50px">
      <thead>
        <tr>
          <th>Pos</th>
          <th>Menge</th>
          <th>Art.-Nr.</th>
          <th>Gewicht kg</th>
          <th>Text</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>HEY</td>
          <td>HEY</td>
          <td>HEY</td>
          <td>HEY</td>
          <td>HEY</td>
        </tr>
      </tbody>
    </table>
    <p>Das Gesamtgewicht beträgt 0,025 kg.</p>
    <p>Lieferung frei Haus</p>
    <p>1x kostenloses Muster, Tierchip 1,25x8 mm, 3-5 Jahre steril !!!</p>
  </body>
</html>
      `;
};

module.exports = {
  firstPage,
  otherPage,
};
