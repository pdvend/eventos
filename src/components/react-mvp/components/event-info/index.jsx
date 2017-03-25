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
                O workshop irá acontecer no <strong>Sábado, dia 01/04, entre 9h e 18h</strong>, no <strong>Escritório
                da PDVend BSB</strong>. Fica em Águas Claras, na Av. Pau Brasil, 6 (Edifício E-Business), ao
                lado da estação Águas Claras do metrô. O evento será <strong>gratuito</strong>. Teremos paradas para
                fazer <em>Coffee Breaks</em> e para o almoço.
              </p>

              <iframe src="https://goo.gl/nd0PYN" frameBorder="0" allowFullScreen className="event-info__map"></iframe>
            </Container>
          </Col>

          <Col xs={12} md={6} className="event-info__column">
            <Container textAlign="justified">
              <Header size='huge'>Agenda</Header>

              <ul className="event-info__agenda">
                <li><strong>09h00:</strong> Abertura</li>
                <li><strong>09h10:</strong> Apresentações</li>
                <li><strong>09h30:</strong> Por que pensar em uma arquitetura para uma aplicação em React?</li>
                <li><strong>10h30:</strong> <em>Coffee Break</em></li>
                <li><strong>10h45:</strong> MVP - vantagens, desvantagens e alternativas</li>
                <li><strong>12h00:</strong> Almoço</li>
                <li><strong>13h30:</strong> Prática: Iniciando uma aplicação com React e MVP</li>
                <li><strong>15h00:</strong> <em>Coffee Break</em></li>
                <li><strong>15h15:</strong> Prática: Evoluindo a aplicação</li>
                <li><strong>18h00:</strong> Encerramento</li>
              </ul>

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
