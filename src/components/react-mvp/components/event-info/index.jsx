import React, { PureComponent } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Container, Divider, Header } from 'semantic-ui-react'

import * as assets from './assets';

import './event-info.css';

class EventInfo extends PureComponent {
  render() {
    return (
      <section className="grid-container" id="event-info">
        <Row around="xs">
          <Col xs={12} md={5} className="event-info__column">
            <Container textAlign="justified">
              <p className="description-paragraph">
                O <strong>Workshop de React+MVP</strong> é uma oportunidade pra conhecer uma das formas de arquitetar
                uma aplicação em React. Saiba o que <strong>fazer</strong> e o que <strong>não fazer</strong> ao
                iniciar o desenvolvimento de uma aplicação utilizando este framework.
              </p>

              <p className="description-paragraph">
                Entenda quais os riscos de não planejar o desenvolvimento sua aplicação, quais são os problemas
                comumente encontrados e as suas soluções segundo esta abordagem.
              </p>

              <p className="description-paragraph">
                O workshop vai acontecer no <strong>Sábado, dia 01/04, entre 9h e 18h</strong> e
                será <strong>gratuito</strong>. Teremos paradas para fazer <em>coffeebreaks</em> e para o almoço.
              </p>
            </Container>
          </Col>

          <Col xs={12} md={6} className="event-info__column">
            <Container textAlign="justified">
              <Header size='huge'>Onde?</Header>

              <p>
                No <strong>Escritório da PDVend BSB</strong>. Fica em Águas Claras, na Avenida Pau Brasil, número 6.
                Edifício E-Business, ao lado da estação Águas Claras do metrô.
              </p>

              <iframe src="https://goo.gl/nd0PYN" frameBorder="0" allowFullScreen className="event-info__map"></iframe>

              <Divider section />

              <Header size='huge'>Sobre o Speaker</Header>

              <div className="grid-container">
                <Row middle="xs">
                  <Col>
                    <img src={assets.speaker} alt="Speaker" className="event-info__speaker__photo"/>
                  </Col>
                  <Col xs={12} sm>
                    <p>
                      <strong>Gabriel Teles</strong> liderou várias equipes de desenvolvimento e trabalhou na
                      equipe de arquitetura de referência tecnológica do Supremo Tribunal Federal.
                    </p>
                    <p>
                      Com 8 anos de experiência, desenvolveu desde jogos até aplicações de alta performace para
                      processamento de vídeo, passando por sistemas financeiros e plataformas educacionais.
                    </p>
                    <p>
                      Seu papel como CTO da PDVend é liderar o time de tecnologia.
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
          </Col>
        </Row>
      </section>
    );
  }
};

export default EventInfo;
