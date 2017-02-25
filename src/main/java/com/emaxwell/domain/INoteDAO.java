package com.emaxwell.domain;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by User on 15/02/2017.
 */
public interface INoteDAO extends CrudRepository<Note, Integer> {
}
