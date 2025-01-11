-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema appgym
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema appgym
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `appgym` DEFAULT CHARACTER SET utf8 ;
USE `appgym` ;

-- -----------------------------------------------------
-- Table `usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `usuario` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(12) NOT NULL COMMENT 'Nombre unico de usuario',
  `password` VARCHAR(255) NOT NULL COMMENT 'Password cifrado',
  `f_creacion` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'FEcha de creacion de la cuenta',
  PRIMARY KEY (`idusuario`),
  UNIQUE INDEX `user_name_UNIQUE` (`user_name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `profesor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `profesor` (
  `idprofesor` INT NOT NULL AUTO_INCREMENT COMMENT 'El mismo Identificador del Usuario',
  `nombre` VARCHAR(25) NOT NULL COMMENT 'Nombre de profesor',
  `apellido` VARCHAR(25) NOT NULL COMMENT 'Apellido de profesor',
  `email` VARCHAR(100) NOT NULL COMMENT 'Email del profesor',
  `telefono` VARCHAR(9) NOT NULL COMMENT 'Telefono del profesor',
  `img_perfil` VARCHAR(200) NOT NULL COMMENT 'La direccion de almacenaje de la imagen de perfil',
  PRIMARY KEY (`idprofesor`),
  CONSTRAINT `usuario_idusuario_profesor_ideprofesor_fx`
    FOREIGN KEY (`idprofesor`)
    REFERENCES `usuario` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `alumno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `alumno` (
  `idalumno` INT NOT NULL AUTO_INCREMENT COMMENT 'El mismo Identificador del Usuario',
  `nombre` VARCHAR(25) NOT NULL COMMENT 'Nombre de alumno',
  `apellido` VARCHAR(25) NOT NULL COMMENT 'Apellido de alumno',
  `email` VARCHAR(100) NOT NULL COMMENT 'Email del alumno',
  `telefono` VARCHAR(9) NOT NULL COMMENT 'Telefono del alumno',
  `img_perfil` VARCHAR(200) NULL COMMENT 'La direccion de almacenaje de la imagen de perfil',
  PRIMARY KEY (`idalumno`),
  CONSTRAINT `usuario_idusuario_profesor_ideprofesor_fx0`
    FOREIGN KEY (`idalumno`)
    REFERENCES `usuario` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `disciplina`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `disciplina` (
  `iddisciplina` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `img_logo` VARCHAR(200) NULL COMMENT 'La direccion de almacenaje de la imagen del logo de la disciplina',
  PRIMARY KEY (`iddisciplina`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `curso` (
  `id_disciplina` INT NOT NULL,
  `codigo_curso` VARCHAR(7) NOT NULL COMMENT 'Codigo del curso autogenerado  con los tres primeros caracteres de la disciplina y lso dos ultimos digitos del año de inicio del curso y final del curso \n\nejemplo Kenjutsu 2024 -2025 = KEN0405',
  `precio` FLOAT NOT NULL,
  `id_profesor` INT NULL,
  PRIMARY KEY (`id_disciplina`, `codigo_curso`),
  INDEX `profesor_idprofesor_curso_id_profesor_fk_idx` (`id_profesor` ASC) VISIBLE,
  CONSTRAINT `profesor_idprofesor_curso_id_profesor_fk`
    FOREIGN KEY (`id_profesor`)
    REFERENCES `profesor` (`idprofesor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `disciplina_iddisciplina_curso _id_disciplina_fk`
    FOREIGN KEY (`id_disciplina`)
    REFERENCES `disciplina` (`iddisciplina`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clase`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clase` (
  `codigo_clase` VARCHAR(10) NOT NULL,
  `nombre` VARCHAR(25) NOT NULL,
  `n_dias_dados` INT NOT NULL DEFAULT 0 COMMENT 'El Numero total de dias que se han dado clase',
  `horario` VARCHAR(45) NULL,
  `id_disciplina` INT NOT NULL,
  `codigo_curso` VARCHAR(7) NOT NULL,
  PRIMARY KEY (`codigo_clase`),
  INDEX `disciplina_iddisciplina_clase_id_disciplina_fx_idx` (`id_disciplina` ASC) VISIBLE,
  INDEX `curso_codigocurso_clase_codigo_cusro_fk_idx` (`codigo_curso` ASC) VISIBLE,
  CONSTRAINT `disciplina_iddisciplina_clase_id_disciplina_fx`
    FOREIGN KEY (`id_disciplina`)
    REFERENCES `disciplina` (`iddisciplina`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `curso_codigocurso_clase_codigo_cusro_fk`
    FOREIGN KEY (`codigo_curso`)
    REFERENCES `curso` (`codigo_curso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pago` (
  `idpago` INT NOT NULL,
  `importe` FLOAT NOT NULL,
  `medio_pago` INT NOT NULL,
  `f_pago` DATE NOT NULL,
  `tipo_pago` INT NOT NULL DEFAULT 0 COMMENT 'EL tipo de pago que efectua\n0 - Mensual\n1 - trimestral\n2 - Anual\n3- un dia',
  PRIMARY KEY (`idpago`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pago_alumno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pago_alumno` (
  `id_alumno` INT NOT NULL,
  `id_pago` INT NOT NULL,
  PRIMARY KEY (`id_alumno`, `id_pago`),
  INDEX `pago_idpago_pago_alumno_id_pago_fk_idx` (`id_pago` ASC) VISIBLE,
  CONSTRAINT `alumno_idalumno_pago_alumno_id_alumno_fk`
    FOREIGN KEY (`id_alumno`)
    REFERENCES `alumno` (`idalumno`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `pago_idpago_pago_alumno_id_pago_fk`
    FOREIGN KEY (`id_pago`)
    REFERENCES `pago` (`idpago`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `matricula`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `matricula` (
  `id_alumno` INT NOT NULL,
  `codigo_curso` VARCHAR(7) NOT NULL,
  `codigo_clase` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id_alumno`),
  INDEX `curso_codigo_curso_matricula_codigo_curso_idx` (`codigo_curso` ASC) VISIBLE,
  INDEX `clase_codigo_clase_matricula_codigo_clase_fk_idx` (`codigo_clase` ASC) VISIBLE,
  CONSTRAINT `alumno_idalumno_matricula_id_alumno_fk`
    FOREIGN KEY (`id_alumno`)
    REFERENCES `alumno` (`idalumno`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `curso_codigo_curso_matricula_codigo_curso_fk`
    FOREIGN KEY (`codigo_curso`)
    REFERENCES `curso` (`codigo_curso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `clase_codigo_clase_matricula_codigo_clase_fk`
    FOREIGN KEY (`codigo_clase`)
    REFERENCES `clase` (`codigo_clase`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `asistencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `asistencia` (
  `id_alumno` INT NOT NULL COMMENT 'Identificador del alumno',
  `codigo_clase` VARCHAR(10) NOT NULL COMMENT 'Codigo de la clase',
  `dia` VARCHAR(2) NOT NULL COMMENT 'Dia de la asistencia',
  `mes` VARCHAR(2) NOT NULL,
  `ano` VARCHAR(4) NOT NULL,
  PRIMARY KEY (`id_alumno`, `codigo_clase`),
  INDEX `clase_codigo_clase_asistencia_codigo_clases_fk_idx` (`codigo_clase` ASC) VISIBLE,
  CONSTRAINT `alumno_idalumno_asistencia_id_alumno_fk`
    FOREIGN KEY (`id_alumno`)
    REFERENCES `alumno` (`idalumno`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `clase_codigo_clase_asistencia_codigo_clases_fk`
    FOREIGN KEY (`codigo_clase`)
    REFERENCES `clase` (`codigo_clase`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
